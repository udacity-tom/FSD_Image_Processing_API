import express from 'express';
import fs from 'fs';
import sharpConvert from './utilities/sharpUtil';
// import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

//initial middlware stub


 app.get('/convertImage', async (req, res) => {
    console.log('req.query', req.query);
    // console.log('type of req.query', typeof req.query);
    let convert:{filename:string, width:number, height:number} = req.query as unknown as {filename:string, width:number, height:number};
    const filename = req.query.filename as unknown as string;
    const imagePath: string = process.cwd()+'/assets/';
    const inputFile: string = `${imagePath}full/${filename}`;
    const outputFile: string = `${imagePath}thumb/${convert.filename.slice(0,convert.filename.length-4)}_${convert.width}_${convert.height}.jpg`;
    const width: number = req.query.width as unknown as number;
    const height: number = req.query.height as unknown as number;
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

    // res.sendFile(sharpConvert(convert) as unknown as string);
    
    // .catch((err: any) => {
    //     res.send("There was an error", err);
    // })
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


export default app;