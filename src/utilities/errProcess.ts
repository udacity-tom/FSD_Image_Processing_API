// import express from  'express';
import getFileDetails from './getFileDetails';
import fs from 'fs';

const errProcess = (req: {query: any; path: any;}, res: any, next: () => void) => {
// const errProcess = (err:express.ErrorRequestHandler,req: express.Request, res: express.Response, next:Function):void => {
    console.log("req.query",req.query);
    console.log(req.query.height == '');
    const inputFileGiven = getFileDetails(req.query) as unknown as {inputFile: string, outputFile: string, width: number, height: number};
    let errorMessage: string = '';
    
    switch (true)  {
        case req.query.width == '' || typeof(req.query.width) != number:
            errorMessage = "To resize image enter a valid width"
            break;            
        case req.query.height == '':
            errorMessage = "To resize image enter a valid height"
            break; 
        case req.query.filename == '':
            errorMessage = "To resize image enter a valid filename"
            break; 
        case fs.existsSync(inputFileGiven.inputFile) == false:
            errorMessage = "The requested input file does not exist"
            break; 
        // case err != '':
        //     errorMessage = 'Unknown system error, please try again.';
    }
    if(errorMessage != ''){
        res.send(errorMessage);
    } else {
        next();    
    }
    
}

export default errProcess;