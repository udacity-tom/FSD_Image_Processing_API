// import sharp, { Sharp }  from 'sharp';
import sharp from 'sharp';
import {promises as fsPromises} from 'fs';

const sharpConvert = async (convert:{inputFile:string, outputFile:string, width:number, height:number}):Promise<string | void> => {
    await sharp(convert.inputFile)
    .resize(Number(convert.width), Number(convert.height))
    .toBuffer()
    .then(  
        async data => {
        await fsPromises.writeFile(convert.outputFile, data);
    });
        return  convert.outputFile;
}

export default sharpConvert;