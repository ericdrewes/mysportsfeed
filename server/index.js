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

app.post("/api/scores", mainCtrl.getScores);
app.post('/api/scores/add', mainCtrl.addScores)
app.put("/api/scores/:id", mainCtrl.updateScores);
app.delete("/api/scores/:id", mainCtrl.destroyScores);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
