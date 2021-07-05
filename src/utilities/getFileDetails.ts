function getFileDetails (givenReq:object): object {
    //collate given data
    let userParams:{filename:string, width:number, height:number} = givenReq as unknown as {filename:string, width:number, height:number};
    const imagePath = process.cwd()+'/assets/';
    const width: number = userParams.width;
    const height: number = userParams.height;
    const inputFile: string = `${imagePath}full/${userParams.filename}`;
    const outputFile: string = `${imagePath}thumb/${userParams.filename.slice(0,userParams.filename.length-4)}_${width}_${height}.jpg`;

    return {"inputFile":inputFile, "outputFile":outputFile, "width":width, "height":height};
}

    export default getFileDetails;