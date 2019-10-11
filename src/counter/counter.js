import React, {useState} from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Counter = (props) => {
 let styles = {
     height: "100vh"
 }

 let [count, setCount] = useState(0);

 let setCounter = (e) => {
    if(count == 10){
        window.alert("Max Count Reached!!");
        count = 0;
        return;
    }
    let target = e.target.id;
    if(count!==10){
    if(target === 'increase'){
       setCount(count = count+1)
    }else{
       setCount(count = count-1)
    }
}

 }

  return (
    <div>
      <Jumbotron style={styles}>
        <h1 className="display-3">{count}</h1>
        <p className="lead">Counting above...</p>
        <hr className="my-2" />
        <p className="lead">
          <Button id="decrease" color="warning" onClick = {setCounter}> -1 </Button>
          <Button id="increase" color="success" onClick = {setCounter}> +1 </Button>
        </p>
        <Button color="danger" size="lg" block onClick={props.exitHandler}>EXIT</Button>
     </Jumbotron>
    </div>
  );
};

export default Counter;