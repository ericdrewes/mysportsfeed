import React, { Component } from "react";
import "./card.css";

export default class card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeName: "",
      awayName: "",
      check: false,
      input: ""
    };

  }

render() {
let deleteButton;
let gameData = "NO GAMES SCHEDULED ON THIS DAY"
  if(this.props.scores){
    gameData = this.props.scores.map((game, index) =>{
        return([
            <div className="results">
                {/* <div className="resultsBorder">
                    <h3>{game.game.date} - </h3>,
                </div> */}

                <div className="resultsBorder">
                <h3>Home: <br/> {game.game.homeTeam.City} <br/>
                            &nbsp;{game.game.homeTeam.Name}
                </h3>
                <input
                    placeholder="Edit Team Name" 
                    onChange={e => this.setState({homeName: e.target.value})}
                /> 
                <button onClick={() => this.props.updateNames(index, this.state.homeName, "home")}>
                Update Names 
                </button>
                </div>

                <div className="resultsBorder">
                    <h3>Home Score: <br/> {game.homeScore}</h3>
                </div>

                <div className="resultsBorder">
                <h3>Away: <br/> {game.game.awayTeam.City} <br/>
                            &nbsp;{game.game.awayTeam.Name}
                </h3>
                <input
                    placeholder="Edit Team Name" 
                    onChange={e => this.setState({awayName: e.target.value})}
                />
                <button onClick={() => this.props.updateNames(index, this.state.awayName, "away")}>
                Update Names 
                </button>
                </div>

                <div className="resultsBorder">
                    <h3>Away Score: <br/> {game.awayScore}</h3>
                </div>

                <button onClick={() => this.props.destroyScores(index)}>
                    Delete Row
                </button>
            </div>
            ])
        }
    )
    
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
                        <div className="overflow">
                            {gameData}
                        </div>
                    </div> 
                </div>
            </div>
            );
          }
        }
