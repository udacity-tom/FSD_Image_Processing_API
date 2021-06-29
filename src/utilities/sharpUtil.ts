import sharp  from 'sharp';

// const sharp = 

// const sharpApp: any = sharp();

function sharpUtil(fileName: string, imagePath: string, xValue: number, yValue: number): void {
    sharp(imagePath+fileName)
    // sharp({
    //     create: {
    //     width: 48,
    //     height: 48,
    //     channels: 4,
    //     background: { r: 255, g: 0, b: 0, alpha: 0.5 } 
    // }})
    .resize(xValue, yValue)
    .toFile(imagePath+'output.jpg', function(err, info) {
        console.log('sharp error', err, info);
        // console.log('current path', __dirname);
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
    });
}
  export default sharpUtil;