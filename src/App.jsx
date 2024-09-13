import Display from "./Components/display";
import styles from "./App.module.css";
import ButtonContainer from "./Components/buttonContainer";
import { useState } from "react";

function App() {
  let [calVal,setVal] =useState("");
  const   onButtonClick =(buttonText)=>{
    if(buttonText ==="c")
    {
      setVal("");
    }
    else if (buttonText ==="=")
    {
        const result = eval(calVal)
        setVal(result)
    }
    else{
      let newVal= calVal + buttonText;
      setVal(newVal)
      
    }


  } 
   

  return (
    <>
      <div className={styles.calculator}>
         <Display displayValue={calVal} />
          <ButtonContainer 
          onButtonClick ={onButtonClick}
          />
      </div>
    </>
  )
}

export default App
