import { useState } from "react";
import Dies from "./Dies"
function App() {
  const [dies, setDies] = useState(generateAllnewdies());
  

  function generateAllnewdies () {
    const newdies = [];
    for (let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random() * 6) + 1;
      newdies.push(random);
    }
    return newdies;
    

  }

  function rollDies() {
    setDies(generateAllnewdies());
  }

       
   



  return (
    <main>
       <div className="die-container">
         {dies.map((die, index) => (
           <Dies key={index} value={die} />
         ))}
   
       </div>
    <div className="roll">
    <button onClick={rollDies}>Roll Dice</button>
 
    </div>
         </main>
  )
}

export default App
