import express, { request, response } from 'express';
import routes from './routes/index';
import logger from './utilities/logger';


//sets up Express/port
const app = express();
const port = process.env.PORT || 3001;

app.use('/', logger, routes);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


//TODO: create a front-end that displays a thumbnail directory?
/*Loop over existing images in thumbs and display at the bottom of screen?
res.send files as images on a second route?
*/
// TODO: write final tests
//TODO: create a front-end that imports additional images

export default app;