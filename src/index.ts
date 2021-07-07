import express, { request, response } from 'express';
import imageCheck from './utilities/imageCheck';
import logger from './utilities/logger';
import getFileDetails from './utilities/getFileDetails';
import errHandler from './utilities/errHandler';
import path from 'path';

//sets up Express/port
const app = express();
const port = process.env.PORT || 3001;

//async endpoint to convert image, Middleware to handle errors and log transactions to console.
 app.get('/convertImage',defaultPage, logger, errHandler, async (req: { query: object; }, res: { sendFile: (arg: string ) => void; }) => {
    let fileObj = getFileDetails(req.query) as unknown as {filename: string, fileExtension: string, outputFilename: string, fileOutputExt: string, inputFile: string, outputFile: string, width: number, height: number};
    if(fileObj.fileOutputExt == undefined)fileObj.fileOutputExt = fileObj.fileExtension;
    //Checks if image is on disk/otherwise creates the file.
    await imageCheck(fileObj);
    res.sendFile(fileObj.outputFile);

});


// app.get('/', logger, express.static(path.join(__dirname, 'routes/instructions')));
app.get('/', logger, (req: { query: object; }, res: { sendFile: (arg: string ) => void; }) => {
    // console.log("path.join(__dirname, 'routes/instructions'))",path.join(__dirname, 'routes/instructions'));
    res.sendFile(path.join(__dirname, 'routes/instructions/index.html'));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


function defaultPage(req: {query: any; path: any;}, res: any, next: () => void) {
    // console.log('req.path', req.path);
    // console.log('req.query', req.query);
    // console.log('typeof req.query', typeof req.query);
    if(Object.keys(req.query).length == 0){
        res.redirect('/');
    } else {
        next();
    }
}
//TODO: create a front-end that displays a thumbnail directory?
/*Loop over existing images in thumbs and display at the bottom of screen?
res.send files as images on a second route?
*/
// TODO: write final tests
//TODO: create a front-end that imports additional images

export default app;