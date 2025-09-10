import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// 1st Way 

function App() {
  // let counter = 15 ;
   let [counter , setCounter]=useState(15)
  const addValue = ()=> {
    // console.log("Clicked" , counter);
    // counter  = counter +1;
    setCounter(counter +1)
    
  } 


  const removeValue = () => {
    setCounter(counter-1)
    
  }

  const reset = ()=>{
    setCounter(15)
    
  }



  return (
    <>
      
      <h1>Counter App</h1>
      <p>This is a simple counter built with React. Click the button to increase or decrease the count.</p>
      <h2>Count : {counter}</h2>

      <div>
        <button className="button" onClick={addValue} >+ Increase {counter} </button>
        <button className="button" onClick={removeValue}>- Decrease {counter}</button>
        <br />
        <button className="button" onClick={reset}>Reset</button>
      
      
      </div>


      <footer>this is footer section {counter}</footer>
      
    </>
  )
}

export default App




// 2nd way  


// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="container">
//       <h1 className="title">React Counter App</h1>
//       <p className="subtitle">Simple counter using useState Hook</p>

//       <div className="counter-box">
//         <h2 className="count">{count}</h2>
//         <div className="button-group">
//           <button className="button" onClick={() => setCount(count + 1)}>Increase</button>
//           <button className="button" onClick={() => setCount(count - 1)}>Decrease</button>
//           <button className="button reset" onClick={() => setCount(0)}>Reset</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Counter;
