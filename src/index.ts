import express from 'express';

const app = express();
const port = 3000;

//initial middlware stub
function convertImage() {
  console.log(`Àn image will be converted`);
}

app.get('/convertImage', (req, res) => {
  convertImage();
  res.send('Request received');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


export default app;