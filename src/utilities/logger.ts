const logger = (req: {query: any; path: any;}, res: any, next:() => void ) => {
    // console.log(getTimeAndDate(),'logger called');
    if(req.path == '/favicon.ico ') next();
    console.log(`${getTimeAndDate()} ${req.path} visited, filename ${req.query.filename} will be resized to width:${req.query.width} and height:${req.query.height}`);
    next();
}

function getTimeAndDate(){
    // const dateTime = (new Date().toDateString()).replace(/\s+/g,'_')+'_'+new Date().toTimeString().replace(/\s+/g,'_');
    const dateTime: string = (new Date().toLocaleDateString()).replace(/\/+/g,'-')+'_'+new Date().toTimeString().slice(0,8).replace(/\s+/g,'_');
    return dateTime;
}


export default logger;