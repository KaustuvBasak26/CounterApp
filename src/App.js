import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GreetingModal from './modal/modal'
import Counter from './counter/counter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openModal: false,
      modalGreeting: ' '
    }
    this.toggle = this.toggle.bind(this);
    this.exitHandler = this.exitHandler.bind(this);
  }

  toggle() {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  exitHandler() {
    this.setState({openModal: true,
    modalGreeting: 'See you again soon...'});
    this.componentWillUnmount();
  }

  componentDidMount(){
    console.log("Mounting")
    this.setState({openModal: true,
      modalGreeting: 'Welcome!'})
  }

  componentWillUnmount(){
    console.log("Unmounting");
  }

  render(){
    return (
      <div className="App">
        <GreetingModal openModal = {this.state.openModal} toggle = {this.toggle} modalGreeting = {this.state.modalGreeting}/>
        <Counter exitHandler = {this.exitHandler}/>
      </div>
    );
  }
  
}

export default App;
