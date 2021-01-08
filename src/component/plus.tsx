import React, { useReducer } from 'react';
function numberReducer  (preNum:number, num:number) {
  return num;
}
const initialNum = 0;
const nhap = document.getElementById('value')!as HTMLInputElement;



const Plus = () =>{
  const [num, setNum] = useReducer(numberReducer, initialNum);
  const add = () => setNum(num + parseInt(nhap.value));
  return(
  <div>
    <input type="number" id="value"></input>
    <button onClick={add}>Add</button>
    <p>Result: {num}</p>

  </div>

  )

}
export default Plus;