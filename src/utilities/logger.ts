import getTimeAndDate from './getTimeAndDate';

const logger = (req: { query: any; path: any }, res: any, next: () => void) => {
  if (req.path == ('/favicon.ico' || '/favicon.ico ')) next();
  console.log(
    `${getTimeAndDate()} ${req.path} visited.` +
      (req.path != '/convertImage'
        ? ' '
        : ` Filename ${req.query.filename} will be resized to width:${req.query.width} and height:${req.query.height}`) +
      (!req.query.format ? ' ' : ` and saved as ${req.query.format}`)
  );
  next();
};

export default logger;
