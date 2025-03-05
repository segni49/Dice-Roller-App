import {nanoid} from  'nanoid';
import { useState } from "react";
import Dies from "./Dies"
import Confetti from "react-Confetti"
function App() {
  const [dies, setDies] = useState(() => generateAllnewdies());
  
   const gamewon =  dies.every(die => die.isHeld) && 
   dies.every(die => die.value ===dies[0].value);

      
  function generateAllnewdies () {
    return new Array(10).fill(0)
    .map(()=> ({
      value: Math.ceil(Math.random()*6),
       isHeld:false,
        id:nanoid()
     }))
  }

  function rollDies() {
    setDies((die)=> {
      return die.map( d=> {
          return d.isHeld===false ?{...d, value:Math.ceil(Math.random()*6)} : d
      } )} );   }

   function newgame () {
    setDies((die)=> {
      return die.map( d=> {
          return d.isHeld===true ?{...d, isHeld:!d.isHeld, value:Math.ceil(Math.random()*6)} : d
      } )} ); 
   }   
  
  function hold(id) {

    setDies(olddice => {
      return olddice.map(d => {
        return d.id===id ? 
        {...d, isHeld: !d.isHeld} : d;
          })
    })  }
      

       const diceelements = dies.map((dieobj, index) => (
        <Dies key={index} 
        value={dieobj.value} 
        isHeld={dieobj.isHeld}
        id ={dieobj.id}
        hold={() => hold(dieobj.id)}/>
      ))


 return (
    <main>
      {gamewon && <Confetti/>}
     
      <h1 className='title'>Tenzies</h1>
    { gamewon ? <p><span>congratulations!!!🎊🎊🎉</span><br></br> you Won The game. click the New GAME Button to start again.</p>
    : <p className='instruction'>roll until all dice are the same. click each die to freeze it at its current value between rolls.</p>
    }  
       <div className="die-container">
        {diceelements}
   
       </div>
    <div className="roll">
    <button onClick={gamewon ? newgame : rollDies}>
           {gamewon ? "NEW GAME" :"ROLL" }
      </button>
 
    </div>
         </main>
  )
}

export default App
