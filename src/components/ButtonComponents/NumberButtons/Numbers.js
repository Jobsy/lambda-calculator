import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from "./NumberButton";
import Display from "../../DisplayComponents/Display.js"
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
   // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
//   const [newNumberState, setNewNumberState] = useState([""]);
// console.log("gggggg: ", newNumberState)
  
// const buttonPressed1 = e => {
//     setNewNumberState([
//       [newNumberState[0] = e.target.textContent]
//     ]) 



  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        numberState.map(function (ele) {
          console.log("yyyyyy: ", ele.value)
        return  <NumberButton  number = {ele} clickFunc={props.changeNumber} />
        })
      }
    </div>
  );
};

export default Numbers;