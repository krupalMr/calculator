import styles from "./buttonContainer.module.css";

const ButtonContainer= ({onButtonClick}) =>{

    let buttonList= ['c','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']
    return (
        <div className={styles.buttonContainer}>
        {buttonList.map((buttonName)=> (
             <button className={styles.button}  onClick={()=> onButtonClick(buttonName)}>{buttonName}</button>
        ))

        }
       
       
      </div>
    );
}

export default ButtonContainer