import express from 'express';
const App = express();

const PORT = process.env.PORT || 5000;

/**
 * Middleware
 */
import bodyParser from 'body-parser';
import cors from 'cors';

/**
 * Controllers
 */
// import AuthController from './controllers/Authentication/AuthController';

/**
 * Middleware Initialization
 */
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

App.use(cors());

/**
 * API Endpoints
 */
App.get('/', (req, res) => {
  res.send('Initialized server.');
});

// App.use('/auth', AuthController);

App.listen(PORT, () => console.log('Listening on PORT 5000'));