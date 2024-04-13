//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import { BackendService } from "@genezio-sdk/crypto-forecast";
import './App.css';

//import Dropp from './DropDownFinal';
//import DatePickerComponent from './DatePick'
//import OtherComponent from './date-picker/OtherComponent';
import ParentComponent from './ParentDatePicker';
//import DateTimePicker from './datehour';
//import Sendd from './SendCall'  <Sendd/>
//import DateTimePicker from './datehour';


function App() {
 // function timestamp(){

  //}
  return (
    <div className="app-container" style={{width:'100%'}}>
      
    
      <ParentComponent/>
      
    </div>
  );
}

/*<a href="https://genezio.com" target="_blank">
          <img
            src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/Logo_Genezio_White.svg"
            className="logo genezio light"
            alt="Genezio Logo"
          />
          <img
            src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/Logo_Genezio_Black.svg"
            className="logo genezio dark"
            alt="Genezio Logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Genezio + React = ❤️</h1>
      <div className="card">
        <input
          type="text"
          className="input-box"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <br />

        <button onClick={() => sayHello()}>Say Hello</button>
        <p className="read-the-docs">{response}</p>*/
export default App
