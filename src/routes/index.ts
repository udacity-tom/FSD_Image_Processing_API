import express from 'express';
import convert from './api/convert';
import instructions from './instructions/instructions';
import logger from '../utilities/logger';
import { resourceLimits } from 'worker_threads';

const routes = express.Router();

// routes.get('/', logger, (req: { query: object; }, res: { sendFile: (arg: string ) => void; }) => {
//     res.sendFile(path.join(__dirname, 'instructions/index.html'));
// });

// routes.use(logger);
routes.use('/', logger,  instructions);
routes.use('/convertImage', logger, convert);
routes.use('*', (req,res) => {
    res.send('Please use the /convertImage endpoint to convert images or / for instructions.');
})

export default routes