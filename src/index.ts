import express, { response } from 'express';
import imageCheck from './utilities/imageCheck';
import logger from './utilities/logger';
import getFileDetails from './utilities/getFileDetails';
import errHandler from './utilities/errHandler';
import path from 'path';

//sets up Express/port
const app = express();
const port = process.env.PORT || 3001;

//async endpoint to convert image, Middleware to handle errors and log transactions to console.
 app.get('/convertImage', logger, errHandler, async (req: { query: object; }, res: { sendFile: (arg: string ) => void; }) => {
    let fileObj = getFileDetails(req.query) as unknown as {filename: string, fileExtension: string, outputFilename: string, fileOutputExt: string, inputFile: string, outputFile: string, width: number, height: number};
    if(fileObj.fileOutputExt == undefined)fileObj.fileOutputExt = fileObj.fileExtension;
    //Checks if image is on disk/otherwise creates the file.
    await imageCheck(fileObj);
    res.sendFile(fileObj.outputFile);

});

app.use('/instructions', logger, express.static(path.join(__dirname, 'routes/instructions')));

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

//DONE:TODO: add error handling as middleware what happens when width, height equals '' ? it crashes
//Done:TODO: add format change additional functions in sharpUTIL
//TODO: additional sharp processing options?  (Adding for example an extra option for toFormat(png) eg. &format=png or = )
//TODO: create a front-end that displays a thumbnail directory?
/*Loop over existing images in thumbs and display at the bottom of screen?
res.send files as images on a second route?
*/
// TODO: write final tests
//TODO: create a front-end that imports additional images

export default app;