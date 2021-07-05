
function getFileDetails (givenReq:object): object {
    //collate given data
    let userParams = givenReq as unknown as {filename:string, width:number, height:number};
    const imagePath = process.cwd()+'/assets/';
    const width: number = userParams.width;
    const height: number = userParams.height;
    const inputFile: string = `${imagePath}full/${userParams.filename}`;
    const outputFilename: string = `${userParams.filename.slice(0,userParams.filename.length-4)}_${width}_${height}.jpg`;
    const outputFile: string = `${imagePath}thumb/${outputFilename}`;

    return {"filename":userParams.filename, "outputFilename": outputFilename, "inputFile":inputFile, "outputFile":outputFile, "width":width, "height":height};
}

    export default getFileDetails;