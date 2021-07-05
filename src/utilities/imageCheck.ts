import sharpConvert from './sharpUtil';
import fs from 'fs';

async function imageCheck (givenReq:object) {
    //collate given data
    let userParams:{filename:string, width:number, height:number} = givenReq as unknown as {filename:string, width:number, height:number};
    const imagePath = process.cwd()+'/assets/';
    const width = userParams.width;
    const height = userParams.height;
    const inputFile = `${imagePath}full/${userParams.filename}`;
    const outputFile = `${imagePath}thumb/${userParams.filename.slice(0,userParams.filename.length-4)}_${width}_${height}.jpg`;
    
    if(!fs.existsSync(outputFile)){
        console.log("File doesn't exist, creating it...");
        await sharpConvert({inputFile, outputFile, width, height});
    } else {
        console.log("File already exists, serving from disk");
    }
    return outputFile;
}


export default imageCheck;