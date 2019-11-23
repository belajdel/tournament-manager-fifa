import express from 'express';

const App = express();

App.get('/', (req, res) => {
  res.send('Initialized server.');
});

App.listen(5000, () => console.log('Listening on PORT 5000'));