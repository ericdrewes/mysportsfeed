import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './card';

export default class App extends Component{
    constructor(props){
      super(props);

      this.state = {
        scores: [],
        input: ""
      }
    this.handleUserInput = this.handleUserInput.bind(this);
    }

    componentDidMount(){
      
    }
  
//=====================================================================

    handleUserInput(e){
      this.setState({input: e.target.value}, () => {
        axios.post('/api/scores', {date: this.state.input}).then(response => {
          console.log(response);
          this.setState({scores: response.data.scoreboard.gameScore})
        })
      });

      
    }


  render() {
    return (
      <div className="App">
        {/* {this.state.scores.length > 0 && 
        this.state.scores.map((val, i) => (
            <Card 
              key={i} 
              scores = {val}
              index = {i}
            />
          ))} */}

          <Card scores={this.state.scores} handleUserInput={this.handleUserInput}/>
        <div>
          {/* <button onClick={this.createPlayer}>Get Scores</button> */}
        </div>
      </div>
    );
  }
}

