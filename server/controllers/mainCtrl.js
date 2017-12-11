const axios = require("axios");

const config = require("./../config");
const base64 = require("base-64");

let scores = [];
let authorizationHeader = {
  Authorization:
    "Basic " + base64.encode(config.username + ":" + config.password)
};

// =============================================================================================

const getScores = (req, res, next) => {
  let gameDate = req.body.date.split("-").join("");
  axios({
    url: `https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/scoreboard.json?fordate=${
      gameDate
    }`,
    headers: authorizationHeader,
    method: "get"
  }).then(response => {
    // console.log(response.data);
    scores = response.data.scoreboard.gameScore;
    res.json(response.data);
  });
};

// =============================================================================================

const updateScores = (req, res, next) => {
    const {team, name } = req.body
    let { id } = req.params;
    id = id.split('').slice(1).join('');
    if(team === "home"){
        scores[id].game.homeTeam.Name = name
    }
    else{
        scores[id].game.awayTeam.Name = name
    }
//   homeScore[id] = Object.assign({}, homeScore[id], { homeScore: req.body.data.homeScore });
    res.json(scores);
};

// =============================================================================================

const addScores = (req, res, next) => {
    console.log(req.body)
  scores.push({
    game: {
        awayTeam: {
            City: req.body.data.awayCity,
            Name: req.body.data.awayName
        },
        homeTeam: {
            City: req.body.data.homeCity,
            Name: req.body.data.homeName
        }
    },
    homeScore: req.body.data.homeScore,
    awayScore: req.body.data.awayScore,
});
  res.json(scores);
};

// =============================================================================================

const destroyScores = (req, res, next) => {
  const { id } = req.params;
  scores.splice(id, 1);
  res.json(scores);
};

module.exports = {
  getScores,
  updateScores,
  destroyScores,
  addScores
};
