import React, { useCallback, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import './CompilerPage.css';
import { ReactTerminal } from 'react-terminal';
import Terminal from '../addons/Terminal';
import { Link } from 'react-router-dom';

const CompilerPage = () => {
  const [program, setProgram] = useState('');
  const [output, setOutput] = useState('Compilation: Successful!');

  const onChange = useCallback((val) => {
    setProgram(val);
    setOutput(val);
  }, [])

  const code = 'println("Hello World!")';

  return (
    <div className='flex p-4 min-h-[80vh]'>
      <CodeMirror className='w-1/2 p-3' value={code} height='80vh' theme={vscodeDark} onChange={onChange}/>
      <div className='flex flex-col p-3 w-1/2 text-[#fff]'>
        <div className='flex flex-col h-[40vh] p-2 justify-center items-center'>
          <h1 className='text-blue-200 font-bold text-[2.3rem] font-mono'>JavaEsque Compiler</h1>
          <p className='text-center'>My custom language built in Java that compiles to Javascript.<br/>You can find the source code on <a href='https://github.com/jameys127'>Github</a></p>
        </div>
        <div className='flex flex-col h-[40vh]'>
          <Terminal output={output} />
        </div>
      </div>
    </div>
  )
}

export default CompilerPage
