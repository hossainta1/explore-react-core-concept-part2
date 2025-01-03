

import './App.css'

function App() {
  function handleClick(){
    alert("Button Click")
  }

  const adFive = (num1) => {
    alert(num1 + 5)
  }
 

  return (
    <>
      <h1>React Core Concept part 2</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => adFive(5)}>Add Five</button>
    </>
  )
}

export default App
