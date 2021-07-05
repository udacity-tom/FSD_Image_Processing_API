import sharpConvert from './sharpUtil';
import fs from 'fs';

async function imageCheck (giveObj: object) {
    // console.log('obj', obj);
    let obj:{inputFile: string, outputFile: string, width: number, height: number} = giveObj as unknown as {inputFile: string, outputFile: string, width: number, height: number};
    // const {inputFile, outputFile, width, height} = obj; 
    //collate given data
    // let userParams:{filename:string, width:number, height:number} = givenReq as unknown as {filename:string, width:number, height:number};
    // const imagePath = process.cwd()+'/assets/';
    // const width = userParams.width;
    // const height = userParams.height;
    // const inputFile = `${imagePath}full/${userParams.filename}`;
    // const outputFile = `${imagePath}thumb/${userParams.filename.slice(0,userParams.filename.length-4)}_${width}_${height}.jpg`;

    if(!fs.existsSync(obj.outputFile)){
        console.log(`${obj.outputFile} doesn't exist, creating it...`);
        await sharpConvert(obj);
        // await sharpConvert({obj.inputFile, obj.outputFile, obj.width, obj.height});
    } else {
        console.log(`${obj.outputFile} already exists, serving from disk`);
    }
    return obj.outputFile;
}


export default imageCheck;