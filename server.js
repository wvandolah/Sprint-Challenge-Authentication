const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  origin: 'http://localhost:3000', // allow only the React application to connect
  credentials: true
};
// bodyParser is included in express as of 4.16.0
// server.use(bodyParser.json());
server.use(express.json());
server.use(cors(corsOptions));

routes(server);

module.exports = {
  server
};
