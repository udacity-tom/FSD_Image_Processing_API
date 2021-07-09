import sharpConvert from './sharpUtil';
import fs from 'fs';
import getTimeAndDate from './getTimeAndDate';
//checks if image is already on disk
async function imageCheck (giveObj: object) {
    let obj = giveObj as unknown as {filename: string, fileExtension: string, outputFilename: string, fileOutputExt: string, inputFile: string, outputFile: string, width: number, height: number};
    //fs.existsSync returns boolean for user requested file whether on disk
    if(!fs.existsSync(obj.outputFile)){
        console.log(`${getTimeAndDate()} ${obj.outputFilename} doesn't exist, creating it...`);
        await sharpConvert(obj);
    } else {
        console.log(`${getTimeAndDate()} ${obj.outputFilename} already exists, serving from disk`);
    }
    return obj.outputFile;
}

export default imageCheck;