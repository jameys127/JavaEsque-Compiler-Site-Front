import React, { useCallback, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import './CompilerPage.css';

const CompilerPage = () => {
  const [program, setProgram] = useState('');

  const onChange = useCallback((val) => {
    setProgram(val);
  }, [])

  const code = 'println("Hello World!")';

  return (
    <div className='compiler-page-container'>
      <CodeMirror className='editor' value={code} height='80vh' theme={vscodeDark} onChange={onChange}/>
    </div>
  )
}

export default CompilerPage
