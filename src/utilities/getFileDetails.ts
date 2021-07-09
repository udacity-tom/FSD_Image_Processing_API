function getFileDetails(givenReq: object): object {
  //collate given user data
  let userParams = (givenReq as unknown) as {
    filename: string;
    width: number;
    height: number;
    format: string;
  };
  const imagePath = process.cwd() + '/assets/';
  const width: number = userParams.width;
  const height: number = userParams.height;
  const filename: string = userParams.filename;
  const fileExtension = filename.slice(filename.length - 3, filename.length);
  const fileOutputExt: string = userParams.format || fileExtension;
  // if(fileOutputExt == undefined) fileOutputExt = fileExtension;
  let outputFilename: string, inputFile: string, outputFile: string;
  if (filename == undefined) {
    inputFile = `${process.cwd()}/routes/instructions/index.html`;
    outputFilename = `index.html`;
    outputFile = `${process.cwd()}/routes/instructions/index.html`;
  } else {
    inputFile = `${imagePath}full/${filename}`;
    outputFilename = `${filename.slice(
      0,
      filename.length - 4
    )}_${width}_${height}.${fileOutputExt}`;
    outputFile = `${imagePath}thumb/${outputFilename}`;
  }

  return {
    filename: filename,
    fileExtension: fileExtension,
    outputFilename: outputFilename,
    fileOutputExt: fileOutputExt,
    inputFile: inputFile,
    outputFile: outputFile,
    width: width,
    height: height
  };
}

export default getFileDetails;
