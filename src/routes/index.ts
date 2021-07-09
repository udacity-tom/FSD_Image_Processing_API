import express from 'express';
import convert from './api/convert';
import instructions from './instructions/instructions';
import logger from '../utilities/logger';

const routes = express.Router();

// routes.get('/', logger, (req: { query: object; }, res: { sendFile: (arg: string ) => void; }) => {
//     res.sendFile(path.join(__dirname, 'instructions/index.html'));
// });

routes.use(logger);
routes.use('/', instructions);
routes.use('/convertImage', convert);
routes.use('*', (req,res) => {
    res.send('Please use the /convertImage endpoint to convert images or <a href="/">instructions</a> for instructions.');
})

export default routes