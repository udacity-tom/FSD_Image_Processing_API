import getFileDetails from './getFileDetails';
import getTimeAndDate from './getTimeAndDate';
import fs from 'fs';

//Error detection for user input
const errHandler = (req: {query: any; path: any;}, res: any, next: () => void) => {
    const inputFileGiven = getFileDetails(req.query) as unknown as {filename: string, fileExtension: string, outputFilename: string, inputFile: string, outputFile: string, width: number, height: number};
    
    let errorMessage: string = '';
    
    switch (true)  {
        case req.query.width == '' || isNaN(req.query.width):
            errorMessage = "Error: To resize image enter a valid width.";
            break;            
        case req.query.height == '' || isNaN(req.query.height):
            errorMessage = "Error: To resize image enter a valid height.";
            break; 
        case req.query.filename == '':
            errorMessage = "Error: To resize image enter a valid filename.";
            break; 
        case fs.existsSync(inputFileGiven.inputFile) == false:
            errorMessage = "Error: The requested input file does not exist.";
            break; 
    }
    if(errorMessage != ''){
        errorMessage += ` See the <a href='/'>instructions</a> for more details.`;
        console.log(`${getTimeAndDate()} ${errorMessage}`);
        res.send(errorMessage);
    } else {
        next();    
    }
}

export default errHandler;