import React from 'react';
import axios from 'axios';
import backgroundVideo from './image/vid1.mp4'
import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip; //advice fromresponse.data.slip in the api 

        this.setState({ advice });// in js a=a can be written as a itself
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <video autoPlay playsInline muted loop id="video">
            <source src={backgroundVideo} type='video/mp4'/>
        </video>
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME AN ADVIZE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;