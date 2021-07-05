import express from 'express';
import imageCheck from './utilities/imageCheck';
import logger from './utilities/logger';
import getFileDetails from './utilities/getFileDetails';
import errProcess from './utilities/errProcess';

//sets up Express/port
const app = express();
const port = process.env.PORT || 3001;

// app.use( (req: express.Request, res: express.Response, next:Function):void => {
//     console.log('Activity noted:', Date.now());
//     next();
// });

//app level middleware - no endpoint
// app.use(logger);
// app.use(errProcess);



//async endpoint
 app.get('/convertImage',errProcess, logger, async (req: { query: object; }, res: { sendFile: (arg0: string) => void; }) => {
    //extracts request information for file/dimensions for resize
    // console.log(getFileDetails(req.query));
    let fileObj:{"inputFile": string, "outputFile": string, "width": number, "height": number} = getFileDetails(req.query) as unknown as {inputFile: string, outputFile: string, width: number, height: number};
    // console.log('fileObj', fileObj.inputFile);
    // console.log('imageCheck(fileObj)', imageCheck(fileObj));
    await imageCheck(fileObj);
    res.sendFile(fileObj.outputFile);
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