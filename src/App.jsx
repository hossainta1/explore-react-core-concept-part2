

import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

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
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => adFive(5)}>Add Five</button>
    </>
  )
}

export default App
