// import sharp, { Sharp }  from 'sharp';
import sharp from 'sharp';
import {promises as fsPromises} from 'fs';
import { resolve } from 'path';

const sharpConvert = async (convert:{inputFile:string, outputFile:string, width:number, height:number}):Promise<string | void> => {
    let response = await sharp(convert.inputFile)
    .resize(Number(convert.width), Number(convert.height))
    .toBuffer()
    .then(  async data => {
        console.log('in then clause');
        await fsPromises.writeFile(convert.outputFile, data);
        console.log('after fsPromises.writeFiel');
    });

    // return response;
    await Promise.resolve(response);
    console.log('promise resolved');
        return  convert.outputFile;
    // }
// return await Promise.resolve(response);
}

export default sharpConvert;