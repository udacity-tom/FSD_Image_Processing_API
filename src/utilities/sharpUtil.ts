// import sharp, { Sharp }  from 'sharp';
import sharp, { AvailableFormatInfo } from 'sharp';
import {promises as fsPromises} from 'fs';
//uses sharp to convert file according to user req
const sharpConvert = async (convert:{inputFile:string, fileExtension: string, outputFile:string, fileOutputExt: string, width:number, height:number}):Promise<string | void> => {
    await sharp(convert.inputFile)
    .resize(Number(convert.width), Number(convert.height))
    .toFormat(convert.fileOutputExt as unknown as AvailableFormatInfo)
    .toBuffer()
    .then(  
        async data => {
        await fsPromises.writeFile(convert.outputFile, data);
    });
        return  convert.outputFile;
}

export default sharpConvert;