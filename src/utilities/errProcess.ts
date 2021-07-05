import express from  'express';

const errProcess = (err:express.ErrorRequestHandler,req: express.Request, res: express.Response, next:Function):void => {
    next();
}





export default errProcess;