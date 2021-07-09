import express from 'express';
import path from 'path';

const instructions = express.Router();

instructions.get(
  '/',
  (req: express.Request, res: { sendFile: (arg: string) => void }) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  }
);

export default instructions;
