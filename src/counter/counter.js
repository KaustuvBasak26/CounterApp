import React, {useState} from 'react';
import JumboDisplay from '../Jumbotron/JumboDisplay'

const Counter = (props) => {
 let [count, setCount] = useState(0);
 let setCounter = (e) => {
    let target = e.target.id;
    if(count!==10){
    if(target === 'increase'){
       setCount(count = count+1)
    }else{
       setCount(count = count-1)
    }
    if(count == 10){
      window.alert("Max Limit Reached!")
    }
   }
 }

  return (
    <div>
      <JumboDisplay count = {count} setCounter={setCounter} exitHandler = {props.exitHandler}/>
    </div>
  );
};

export default Counter;