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
  console.log(req.body.date);
  let gameDate = req.body.date;
  axios({
    url:
      `https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/scoreboard.json?fordate=${gameDate}`,
    headers: authorizationHeader,
    method: "get"
  }).then(response => {
    console.log(response.data);
    res.json(response.data);
  });
};

// =============================================================================================

const destroyScores = (req, res, next) => {
  const { id } = req.params;
  scores.splice(id, 1);
  res.json(scores);
};

module.exports = {
  getScores
  //   addPlayers,
  //   updatePlayers,
  //   deletePlayers
};
