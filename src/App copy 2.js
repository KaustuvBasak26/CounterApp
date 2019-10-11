import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalExample from './modal/modal'

class App extends React.Component{
  componentDidMount(){
    () => {
      console.log("Hi adad")
    }
    window.alert("Hi ASDD");
  }

  componentWillUnmount(){
    window.alert("Bye ASDD");
  }
  
  render(){
    return(<div>
      Hi
    </div>);
  }
}

export default App;
