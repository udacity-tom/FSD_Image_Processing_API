import getTimeAndDate from './getTimeAndDate';

const logger = (req: {query: any; path: any;}, res: any, next:() => void ) => {
    if(req.path == '/favicon.ico ') next();
    console.log(`${getTimeAndDate()} ${req.path} visited, filename ${req.query.filename} will be resized to width:${req.query.width} and height:${req.query.height}`);
    next();
}

export default logger;