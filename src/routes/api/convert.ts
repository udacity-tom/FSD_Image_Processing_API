import express from 'express';
import logger from '../../utilities/logger';
import errHandler from '../../utilities/errHandler';
import getFileDetails from '../../utilities/getFileDetails';
import imageCheck from '../../utilities/imageCheck';


const convert = express.Router();

// convert.get('/convert', )
//async endpoint to convert image, Middleware to handle errors and log transactions to console.
convert.get('/',defaultPage, errHandler, async (req: { query: object; }, res: { sendFile: (arg: string ) => void; }) => {
   let fileObj = getFileDetails(req.query) as unknown as {filename: string, fileExtension: string, outputFilename: string, fileOutputExt: string, inputFile: string, outputFile: string, width: number, height: number};
   // if(fileObj.fileOutputExt == undefined)fileObj.fileOutputExt = fileObj.fileExtension;
   //Checks if image is on disk/otherwise creates the file.
   await imageCheck(fileObj);
   res.sendFile(fileObj.outputFile);

});

function defaultPage(req: {query: any; path: any;}, res: any, next: () => void) {
    if(Object.keys(req.query).length == 0){
        res.redirect('/');
    } else {
        next();
    }
}

export default convert;