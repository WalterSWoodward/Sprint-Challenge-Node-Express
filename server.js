// require

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const actionsRouter = require('./routers/actionsRouter.js');
const projectsRouter = require('./routers/projectsRouter.js');
const server = express();

// middleware
server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());

//

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

// create server

server.get('/', function(req, res) {
  res.json({ api: 'Running...' });
});

const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));
