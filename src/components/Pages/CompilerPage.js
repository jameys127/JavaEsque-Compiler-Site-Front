import React, { useCallback, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import './CompilerPage.css';
import Terminal from '../addons/Terminal';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useMutation} from '@tanstack/react-query';
import api from '../../api/api';


const CompilerPage = () => {
  const [program, setProgram] = useState('println("Hello, World!")');
  const [output, setOutput] = useState('Compilation: Successful!');

  const onChange = useCallback((val) => {
    setProgram(val);
  }, [])

  const compileProgram = (e) => {
    e.preventDefault();
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
        setOutput(`****Compilation: Failed!****\n${data.error}\n\nDone;`);
      }else{
        setOutput(`****Compilation: Successful!****\n${data.output}\n\nDone;`)
      }
    },
    onError: (err) => {
      setOutput(`## SERVER ERROR ##\n${err.error}`);
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
      <div className='flex flex-col p-3 w-1/2 text-[#fff]'>
        <div className='flex flex-col h-[35vh] p-2 justify-center items-center'>
          <h1 className='text-blue-200 font-bold text-center text-[2.3rem] font-mono'>JavaEsque Compiler</h1>
          <p className='text-center'>My custom language built in Java that compiles to Javascript.<br/>You can find the source code on <a href='https://github.com/jameys127'>Github</a></p>
        </div>
        <div className='h-[5vh]'>
          <ThemeProvider theme={theme}>
            <Button variant='contained' size='small' color='violet' onClick={compileProgram}>Compile</Button>
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
