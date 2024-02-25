import './App.css'
import React, { useState } from 'react';
import UseContext from './Components/UseContext';
// import UseState from './Components/UseState'
// import MultipleState from './Components/MultipleState'
// import UseObject from './Components/UseObjectState'
// import StateFromFunc from './Components/StateFromFunction'
// import UseEffet from './Components/UseEffect'


export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <div>
      {/* <UseState/> */}
      {/* <MultipleState/> */}
      {/* <UseObject/> */}
      {/* <StateFromFunc/> */}
      {/* <UseEffet/> */}
      {/* <Task/> */}
      
      <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
      </ToggleTheme.Provider>

    </div>
  )
}

export default App