import express from 'express';
import sharpUtil from './utilities/sharpUtil';
// import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

//initial middlware stub
function convertImage(convert:{filename:string, width:number, height:number}): string {
    const imagePath: string = __dirname.slice(0,__dirname.length-4)+'/assets/';
    // console.log('imagePath',imagePath);
    console.log(`The file named ${convert.filename} will be converted to ${convert.width} by ${convert.height}`);
    return sharpUtil(convert.filename, imagePath, convert.width, convert.height);

}

app.get('/convertImage', (req, res) => {
    console.log('req.query', req.query);
    console.log('type of req.query', typeof req.query);
    let convert:{filename:string, width:number, height:number} = req.query as unknown as {filename:string, width:number, height:number};

    //TODO: read files in thumb directory, check if present with given parameters, then serve 'cached' file from disk
    //use node fs.read (file test criteria `${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`)
    // convertImage(convert);
    // res.send('Request received');
    const pathOfImage: string = convertImage(convert);
    console.log('convertImage()', );
    res.sendFile(convertImage(convert));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


export default app;