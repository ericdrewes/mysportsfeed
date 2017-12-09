import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './card';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      scores: []
    }
  //   this.createPlayer = this.createPlaer.bind(this);
  //   this.updatePlayer = this.updatePlayer.bind(this);
  //   this.destroyPlayer = this.destoryPlayer.bind(this);
  }
  componentDidMount(){
    axios.get('/api/scores').then(response => {
      console.log(response);
      this.setState({scores: response.data.scoreboard.gameScore})
    })
  }
  //==================================================================
//   createPlayer(){
//     const players = {
//       name: 'Chef Curry',
//     };

//     axios.post('/api/players', player).then(response => {
//       this.setState({players: response.data})
//     }).catch(e => alert(e))
//   }
// //====================================================================
//   updatePlayer(id){
//     const updatedPlayer = {
//       name: 'Splash Bro'
//     }
//     axios.put('/api/players' + id, updatedPlayer).then(response => {
//       this.setState({players: response.data})
//     }).catch(console.log);
//   }
// //=====================================================================

  // destoryScores(id){
  //   axios.delete('/api/scores' + id, updatedScores).then(response => {
  //     this.setState({scores: response.data})
  //   }).catch(console.log);
  // }



//=====================================================================

handleNameInput(e){
  this.setState({name: e.target.value});
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.scores.length > 0 && 
        this.state.scores.map((val, i) => (
            <Card 
              key={i} 
              updatePlayer={this.updatePlayer}
              destroyScores={this.destoryPlayer}
              scores = {val}
              index = {i}
            />
          ))}
        <div>
          {/* <button onClick={this.createPlayer}>Get Scores</button> */}
        </div>
      </div>
    );
  }
}

