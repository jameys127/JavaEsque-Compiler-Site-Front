import React, { createContext, useState } from 'react'

export const CompilerContext = createContext();

export const Context = ({children}) => {
    const [program, setProgram] = useState('println("Hello, World!");');
    const [output, setOutput] = useState('Output will appear here >');
  return (
    <CompilerContext.Provider value={{program, setProgram, output, setOutput}}>
        {children}
    </CompilerContext.Provider>
  )
}

