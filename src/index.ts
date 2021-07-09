import express from 'express';
import routes from './routes/index';

//sets up Express/port
const app = express();
const port = process.env.PORT || 3001;

//default route for express routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
