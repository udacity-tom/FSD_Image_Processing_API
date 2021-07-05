import express from  'express';
import { nextTick } from 'process';

const logger = (req: express.Request, res: express.Response, next:Function):void => {
    next();
}




export default logger;