import express from 'express';
import logger from '../../utilities/logger';
import path from 'path';

const instructions = express.Router();

instructions.get('/', logger, (req: { query: object; }, res: { sendFile: (arg: string ) => void; }) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

export default instructions;