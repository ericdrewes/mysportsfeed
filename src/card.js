import React, { Component } from "react";
import "./card.css";

export default class card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.scores.name,
      check: false,
      input: ""
    };
    //this.handleUserInput = this.handleUserInput.bind(this);
  }

//   handleUserInput(e) {
//     this.setState({ input: e.target.value });
//     console.log(this.state.input)
//   }


  render() {
    let deleteButton;
    let gameData = "No games for that day!"

    if (this.state.check) {
      deleteButton = (
        <button onClick={() => this.props.destroyScores(this.props.index)}>
          Delete Scores
        </button>
      );
    }

    if(this.props.scores){
       gameData = this.props.scores.map(game =>{
                console.log(this.props.scores)
                return([
                  <div className="results">
                    {/* <h3>{game.game.date} - </h3>, */}
  
                    <h3>Away: {game.game.awayTeam.City}
                              &nbsp;{game.game.awayTeam.Name}
                    </h3>,
                    <h3>Final Score: {game.awayScore} - </h3>,
  
                    <h3>Home: {game.game.homeTeam.City},
                              {game.game.homeTeam.Name}
                    </h3>,
                    <h3>Final Score: {game.homeScore}</h3>
                  </div>
                ])
            })
        
    }

    return (
    <div className="body">
       <div className="transparent">
        <h1 className="title">PostSeason NBA Scores</h1>
            <div className="inputDates">
                <input
                    id="date"
                    type="date"
                    onChange={e => {
                    this.props.handleUserInput(e);
                    }}
                />
                {deleteButton}
                {gameData}
            </div> 
        </div>
    </div>
    );
  }
}
