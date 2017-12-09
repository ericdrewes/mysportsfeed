import React, {Component} from 'react';

export default class card extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        name: this.props.scores.name,
        check: false,
    };
    this.handleUserInput = this.handleUserInput.bind(this);
}

handleUserInput(e){
    this.setState({name: e.target.value});
}

render(){
    let deleteButton;
    console.log(this.props)
    if(this.state.check){
        deleteButton = (<button onClick = {() => (this.props.destroyDate(this.props.index))}>
        Delete Scores
    </button>)
    }
    return(
        <div>
            <h1>Home: {this.props.scores.homeScore}</h1>
            <h1>Away: {this.props.scores.awayScore}</h1>
            <h1>{this.state.name}</h1>
            <input id="date" type="date" onChange={(e) => {this.handleUserInput(e)}}/>
            <button 
                onClick={() => (this.props.index, this.state.name)}
            > 
                Show Scores
            </button>
            {deleteButton}
        </div>
    );
  }
}