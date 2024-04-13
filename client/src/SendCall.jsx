import React from "react";
//import 

function Sendd({selectedDate,selectedChain,onPriceSelected,onAccuracySelected}){

    const unixTimeStampCall =() =>{
        
       const value = parseInt(selectedDate.getTime(), 10);
       //callul de api cu rezultatul CU SELECTEDCHAIN acum imi da doar timestampu 
       onPriceSelected(value)
       onAccuracySelected( value/100000);
       console.log( value);
       console.log( {selectedChain});
       //console.log()
    }
    return(
        <div>
            <button onClick={unixTimeStampCall}>BAGA BEATUU</button>
        </div>
    )
}

export default Sendd;