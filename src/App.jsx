import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'

function App() {

  // function handleClick() {
  //   alert("I am clicked");
  // }
  const handleClick = () => {
    alert("I am clicked")
  }

  const add = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      {/* <h4>Vite + React</h4> */}
      {/* <Counter></Counter> */}
      <Batsman></Batsman>
      {/* <button onClick={handleClick}>click me</button> */}

      {/* <button onClick={() => add(9)}>add click</button> */}



    </>
  )
}

export default App
