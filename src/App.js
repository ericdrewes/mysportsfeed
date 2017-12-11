import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import Card from "./card";

//=====================================================================

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [],
      input: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.destroyScores = this.destroyScores.bind(this);
    this.updateNames = this.updateNames.bind(this);
    this.createScores = this.createScores.bind(this);
  }

//=====================================================================

  handleUserInput(e) {
    console.log(e.target.value);
    this.setState({ input: e.target.value }, () => {
      axios.post("/api/scores", { date: this.state.input }).then(response => {
        console.log(response);
        this.setState({ scores: response.data.scoreboard.gameScore });
      });
    });
  }

//=====================================================================

  createScores() {
    const scores = {
      homeCity: this.state.homeCity,
      homeName: this.state.homeName,
      homeScore: this.state.finalHomeScore,
      awayCity: this.state.awayCity,
      awayName: this.state.awayName,
      awayScore: this.state.finalAwayScore
    };
    axios
      .post("/api/scores/add", { data: scores })
      .then(response => {
        console.log(response.data);

        this.setState({ scores: response.data });
        console.log(this.state.scores)
        
      })
      .catch(e => alert(e));
  }

//=====================================================================

  destroyScores(id) {
    axios
      .delete("/api/scores/" + id)
      .then(response => {
        this.setState({ scores: response.data });
      })
      .catch(console.log);
  }

//=====================================================================

  updateNames(id, name, team) {
    const updateNames = {
      name,
      team
    };
    axios
      .put(`/api/scores/:${id}`, updateNames)
      .then(response => {
        console.log(response.data)
        this.setState({ scores: response.data });
      })
      .catch(console.log);
  }

//=====================================================================

  render() {
    return (
      <div className="App">
        <Card
          scores={this.state.scores}
          handleUserInput={this.handleUserInput}
          destroyScores={this.destroyScores}
          createScores={this.createScores}
          updateNames={this.updateNames}
        />
        <div>
          <button onClick={this.createScores}>Add To Scores</button>
          <input
            placeholder="Home City"
            onChange={e => this.setState({ homeCity: e.target.value })}
          />
          <input
            placeholder="Home Name"
            onChange={e => this.setState({ homeName: e.target.value })}
          />
          <input
            placeholder="Final Home Score"
            onChange={e => this.setState({ finalHomeScore: e.target.value })}
          />
          <input
            placeholder="Away City"
            onChange={e => this.setState({ awayCity: e.target.value })}
          />
          <input
            placeholder="Away Name"
            onChange={e => this.setState({ awayName: e.target.value })}
          />
          <input
            placeholder="Final Away Score"
            onChange={e => this.setState({ finalAwayScore: e.target.value })}
          />
        </div>
      </div>
    );
  }
}
