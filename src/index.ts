import express from 'express';
import sharpUtil from './utilities/sharpUtil';

const app = express();
const port = 3000;

//initial middlware stub
function convertImage() {
  console.log(`Àn image will be converted`);
  const fileName: string = 'fjord.jpg';
  sharpUtil(fileName);
}

app.get('/convertImage', (req, res) => {
  convertImage();
  res.send('Request received');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


export default app;