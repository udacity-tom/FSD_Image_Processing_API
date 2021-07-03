import express from 'express';
import fs from 'fs';
import sharpConvert from './utilities/sharpUtil';

const app = express();
const port = process.env.PORT || 3001;

 app.get('/convertImage', async (req, res) => {
    const filename = req.query.filename as unknown as string;
    const imagePath: string = process.cwd()+'/assets/';
    const width: number = req.query.width as unknown as number;
    const height: number = req.query.height as unknown as number;
    const inputFile: string = `${imagePath}full/${filename}`;
    const outputFile: string = `${imagePath}thumb/${filename.slice(0,filename.length-4)}_${width}_${height}.jpg`;
    let fileToConvert:{inputFile:string, outputFile:string, width:number, height:number} = {
        inputFile,
        outputFile,
        width,
        height
    }
    
    if(!fs.existsSync(outputFile)){
        console.log("File doesn't exist, creating it...");
        await sharpConvert(fileToConvert);
    } else {
        console.log("File already exists, serving from disk");
    }
    res.sendFile(outputFile);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


export default app;