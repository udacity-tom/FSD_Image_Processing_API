import express from 'express';
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
    
    //TODO: read files in thumb directory, check if present with given parameters, then serve 'cached' file from disk
    //use node fs.read (file test criteria `${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`)
    // convertImage(convert);
    // res.send('Request received');
    // const pathOfImage: string = convertImage(convert);
    // console.log('convertImage()', );

    // const convertedImage: Promise<string> = (async (): Promise<string> => {
    //      return await convertImage(convert) as unknown as string ;
    // })();


    // let responsePath:string; 

    // const convertedImage: string = sharpConvert(convert) as unknown as string;
    // const convertedImage = async () => {
    //     const response =  sharpConvert(convert);
    //     console.log('index.ts response is', await Promise.resolve(response));
    //     let responsePath = await Promise.resolve(response) ;
    //     return responsePath;
    // }
    
    // let convertedImage = sharpConvert(convert);
    // console.log('convertedImage index.ts',convertedImage);
    
    // convertedImage();
    // console.log("convertedImage", convertedImage());
    // let responsePath = convertedImage() as unknown as string;
    // console.log('responsePath', responsePath);
    // res.sendFile(responsePath);
    
    // process.nextTick( () => res.sendFile(convertedImage() as unknown as string));
    
    // console.log('sharpConvert',sharpConvert(convert));
    
    // res.sendFile(responsePath);
    // console.log('sharpConvert(fileToConvert)',sharpConvert(fileToConvert));

    await sharpConvert(fileToConvert);
    
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