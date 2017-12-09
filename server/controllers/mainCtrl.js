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
  //   console.log(authorization);
  axios({
        url:
        "https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/scoreboard.json?fordate=20170209",
        headers: authorizationHeader,
        method: "get"
        }).then(response => {
            console.log(response.data);
            res.send(response.data);
        })
};

  axios({
      url:
      ""
  })

 // =============================================================================================

// const addPlayers = (req, res) => {
//   players.push(req.body);
//   res.json(players);
// };

// const updatePlayers = (req, res, next) => {
//   const id = req.paramsl;
//   const filtered = players.filter((player, id) => id === i)[0];
//   players[id] = Object.assign({}, filtered, { name: req.body.name });
//   //   console.log(filtered);
//   res.json(players);
// };

// const deletePlayers = (req, res, next) => {
//   const { id } = req.params;
//   players.splice(id, 1);
//   res.json(players);
// };

module.exports = {
  getScores
//   addPlayers,
//   updatePlayers,
//   deletePlayers
};
