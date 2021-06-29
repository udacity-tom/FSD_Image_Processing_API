import express from 'express';
import sharpUtil from './utilities/sharpUtil';

const app = express();
const port = 3000;

//initial middlware stub
function convertImage(convert:{filename:string, width:number, height:number}) {
    // const xValue = 300;
    // const yValue = 200;
    const imagePath: string = __dirname.slice(0,__dirname.length-4)+'/assets/';
    console.log('imagePath',imagePath);
    // const fileName: string = 'fjord.jpg';
    console.log(`The file named ${convert.filename} will be converted to ${convert.width} by ${convert.height}`);
    // console.log('fileName imagePath', fileName, imagePath);
    sharpUtil(convert.filename, imagePath, convert.width, convert.height);
    // const success = sharpUtil(fileName, imagePath, xValue, yValue);
    // if(success) {
        // :{filename:string, width:number, height:number}
    // };
}

app.get('/convertImage', (req, res) => {
    console.log('req.query', req.query);
    console.log('type of req.query', typeof req.query);
    // let ParsedQ:{filename:string, width:number, height:number};
    // ParsedQ = req.query;
    let convert:{filename:string, width:number, height:number} = req.query as unknown as {filename:string, width:number, height:number};
    // let convert:{filename:string, width:number, height:number} ;
    // const filename = req.query.filename as string;
    // const = req.query;
    // let convert:{filename:string, width:number, height:number};
    convertImage(convert);
    res.send('Request received');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


export default app;