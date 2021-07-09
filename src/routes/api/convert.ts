import express from 'express';
import errHandler from '../../utilities/errHandler';
import getFileDetails from '../../utilities/getFileDetails';
import imageCheck from '../../utilities/imageCheck';

const convert = express.Router();

//returns instructions page if no parameters passed to /convert
function defaultPage(
  //   req: { query: Record<string, unknown>; path: string },
  //   res: any,
  req: express.Request,
  res: express.Response,
  next: () => void
) {
  if (Object.keys(req.query).length == 0) {
    res.redirect('/');
  } else {
    next();
  }
}
//async endpoint to convert image, Middleware to handle errors and log transactions to console.
convert.get(
  '/',
  defaultPage,
  errHandler,
  async (req: express.Request, res: { sendFile: (arg: string) => void }) => {
    const fileObj = (getFileDetails(req.query) as unknown) as {
      filename: string;
      fileExtension: string;
      outputFilename: string;
      fileOutputExt: string;
      inputFile: string;
      outputFile: string;
      width: number;
      height: number;
    };
    await imageCheck(fileObj);
    res.sendFile(fileObj.outputFile);
  }
);

export default convert;
