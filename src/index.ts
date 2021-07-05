import express from 'express';
import imageCheck from './utilities/imageCheck';
import logger from './utilities/logger';
import errProcess from './utilities/errProcess';

//sets up Express/port
const app = express();
const port = process.env.PORT || 3001;

app.use( (req: express.Request, res: express.Response, next:Function):void => {
    console.log('Activity noted:', Date.now());
    next();
});

app.use(logger, errProcess);

//async endpoint
 app.get('/convertImage', async (req, res) => {
    //extracts request information for file/dimensions for resize
    const outputFile = await imageCheck(req.query);
    res.sendFile(outputFile);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

//TODO: add error handling as middleware what happens when width, height equals '' ? it crashes
//TODO: add format change additional functions in sharpUTIL
//TODO: additional sharp processing options?
//TODO: create a front-end that displays a thumbnail directory?
//TODO: create a front-end that imports additional images

export default app;