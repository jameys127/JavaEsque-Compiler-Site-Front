import React, { useCallback, useContext, useState, useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import Terminal from '../addons/Terminal';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useMutation} from '@tanstack/react-query';
import api from '../../api/api';
import { CircularProgress } from '@mui/material';
import {CompilerContext} from '../Fixed/Context';


const CompilerPage = () => {
  const {program, setProgram, output, setOutput} = useContext(CompilerContext);
  const [loading, setLoading] = useState(false);
  const [sandbox, setSandbox] = useState(null);

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    iframe.contentWindow.console = {
      log: () => {},
      error: () => {},
      warn: () => {}
    };

    setSandbox(iframe.contentWindow);

    return () => iframe.remove();
  }, []);

  const onChange = useCallback((val) => {
    setProgram(val);
  }, [setProgram])

  const compileProgram = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Compiling')
    mutateProgram.mutate({program})
  }

  const mutateProgram = useMutation({
    mutationFn: async ({program}) => {
      const res = await api.post('/', {program});
      return res.data;
    },
    onSuccess: (data) => {
      if(data.error){
        setOutput(`****Compilation: Failed!****\n${data.error}`);
        setLoading(false);
      }else{
        if(!sandbox){
          setOutput('Sandbox not ready, refresh page')
          return;
        }
        let captured = '';
        const sandboxConsole = sandbox.console;
        const originalLog = sandboxConsole.log;

        sandboxConsole.log = (...args) => {
          const line = args.join(' ');
          captured += line + '\n';
          originalLog.apply(sandboxConsole, args);
        };

        try{
          sandbox.eval(data.output);
        } catch(e){
          captured += `Runtime error: ${e.message}\n`;
          setOutput(`## JAVASCRIPT ERROR ##\n${captured.trim() || ''}\nDone;`);
          return;
        } finally{
          sandboxConsole.log = originalLog;
        }

        setOutput(`****Compilation: Successful!****\n${captured.trim() || ''}\nDone;`);
        setLoading(false);
      }
    },
    onError: (err) => {
      setOutput(`## SERVER ERROR ##\n${err.error}`);
      setLoading(false);
    }
  })


  const theme = createTheme({
    palette: {
      violet: {
        main: '#e76fff',
        light: '#e76fff',
        dark: '#9d41af',
        contrastText: '#242105',
      },
    },
  });


  return (
    <div className='flex p-4 min-h-[80vh]'>
      <CodeMirror className='w-1/2 p-3' value={program} height='80vh' theme={vscodeDark} onChange={onChange}/>
      <div className='flex flex-col p-3 w-1/2 text-white'>
        <div className='flex flex-col h-[35vh] p-2 justify-center items-center'>
          <h1 className='text-[#e76fff] font-bold text-center text-[2.3rem] font-mono'>JavaEsque Compiler</h1>
          <p className='text-center'>My custom language built in Java that compiles to Javascript.<br/>You can find the source code on <a className='text-[#e76fff] hover:text-[#f1a9ff] hover:font-bold duration-200 ease-in' href='https://github.com/jameys127/JavaEsque-Language' target='_blank' rel='noopener noreferrer'>Github</a></p>
        </div>
        <div className='h-[5vh]'>
          <ThemeProvider theme={theme}>
            <Button 
              variant='contained' 
              size='small' 
              color='violet' 
              onClick={compileProgram}
              loading={loading}
              loadingIndicator={
                <CircularProgress size={20} sx={{color: '#e76fff'}} />
              }
            >
              Compile
            </Button>
          </ThemeProvider>
        </div>
        <div className='flex flex-col h-[40vh]'>
          <Terminal output={output}/>
        </div>
      </div>
    </div>
  )
}

export default CompilerPage
