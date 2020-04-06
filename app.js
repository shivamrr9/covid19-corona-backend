const express = require("express");
const bodyParser = require("body-parser");
const port = 3002;
const app = express();
var cors = require("cors");
const routes = require("./routes");

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

routes(app);

// Start the server
const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
