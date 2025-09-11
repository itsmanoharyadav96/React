

import './App.css'
import { useState } from 'react'

function App() { 

   const[color , setColor]=useState("olive")
  
  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      
    </div>
    
    <div className=" fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full shadow-lg " >
        <button className=" rounded-full  mr-3 bg-red-600 p-4" onClick={()=>setColor("red")} >Red   </button>
        <button className=" rounded-full mr-3 bg-green-600 p-4" onClick={()=>setColor("green")}>Green </button>
        <button className=" rounded-full mr-3 bg-blue-600 p-4" onClick={()=>setColor("blue")}>Blue </button>
        
    </div>
     
    </>
  )
}

export default App
