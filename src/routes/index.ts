import express from 'express';
import convert from './api/convert';
import instructions from './instructions/instructions';
import logger from '../utilities/logger';

const routes = express.Router();

//express router to route on endpoint use
routes.use(logger);
routes.use('/', instructions);
routes.use('/convertImage', convert);
routes.use('*', (req,res) => {
    res.send('Please use the /convertImage endpoint to convert images or <a href="/">instructions</a> for instructions.');
})

export default routes