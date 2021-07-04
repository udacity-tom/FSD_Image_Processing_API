import express from 'express';
import imageCheck from './utilities/imageCheck';
// import fs from 'fs';
// import sharpConvert from './utilities/sharpUtil';

//sets up Express/port
const app = express();
const port = process.env.PORT || 3001;

//async endpoint
 app.get('/convertImage', async (req, res) => {
    //extracts request information for file/dimensions for resize
    const outputFile = await imageCheck(req.query);
    res.sendFile(outputFile);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


// async function imageCheck (givenReq:object) {
//     //collate given data
//     let userParams:{filename:string, width:number, height:number} = givenReq as unknown as {filename:string, width:number, height:number};
//     const filename = userParams.filename as unknown as string;
//     const imagePath = process.cwd()+'/assets/';
//     const width: number = userParams.width as unknown as number;
//     const height: number = userParams.height as unknown as number;
//     const inputFile = `${imagePath}full/${filename}`;
//     const outputFile = `${imagePath}thumb/${filename.slice(0,filename.length-4)}_${width}_${height}.jpg`;
//     //creates object to pass to Util resize function.
//     let fileToConvert:{inputFile:string, outputFile:string, width:number, height:number} = {
//         inputFile,
//         outputFile,
//         width,
//         height
//     }
    
//     if(!fs.existsSync(outputFile)){
//         console.log("File doesn't exist, creating it...");
//         await sharpConvert(fileToConvert);
//     } else {
//         console.log("File already exists, serving from disk");
//     }
//     return outputFile;
// }

export default app;