const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const mainCtrl = require("./controllers/mainCtrl");
const mySportsFeeds = require("mysportsfeeds-node"); // my sport feeds require
const config = require("./config");

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get("/api/scores", mainCtrl.getScores);
// app.post("/api/players", mainCtrl.addPlayers);
// app.put("/api/players/:id", mainCtrl.updatePlayers);
// app.delete("/api/players/:id", mainCtrl.deletePlayers);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
