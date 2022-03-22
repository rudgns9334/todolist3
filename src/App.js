
import { Component } from 'react';
import './App.css';
import Head from './components/Head';
import List from './components/List';
import Foot from './components/Foot';



class App extends Component {
  render(){
    return (
      <div className='App'>
        <Head/>
        <List/>
        <Foot/>
      </div>
    )
  }
}


export default App;
