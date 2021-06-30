import sharp  from 'sharp';

// const sharp = 

// const sharpApp: any = sharp();




// const sharpUtil = async (fileName: string, imagePath: string, xValue: number, yValue: number): boolean => {
//     sharp(imagePath+fileName)
//     // sharp({
//     //     create: {
//     //     width: 48,
//     //     height: 48,
//     //     channels: 4,
//     //     background: { r: 255, g: 0, b: 0, alpha: 0.5 } 
//     // }})
//     .resize(xValue, yValue)
//     .toFile(`${imagePath}${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`, function(err) {
//         if(err != null){
//             console.log('sharp error', err)
//             return false;
//         };
//         // console.log('current path', __dirname);
//         // output.jpg is a 300 pixels wide and 200 pixels high image
//         // containing a scaled and cropped version of input.jpg
//         return true;
//     });
// }

function sharpUtil(fileName: string, imagePath: string, xValue: number, yValue: number): string {
    
        sharp(imagePath+'full/'+fileName)
        .resize(Number(xValue), Number(yValue))
        .toFile(`${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`, function(err) {
            if(err != null){
                console.log('sharp error', err)
                // return false;
            };
            console.log('image',`${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`);
        });
        return `${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`;
    }

  export default sharpUtil;
// function sharpUtil(fileName: string, imagePath: string, xValue: number, yValue: number): string {
    
//     const answer: string = ((function (imagePath,fileName): string {
//         sharp(imagePath+'full/'+fileName)
//         .resize(Number(xValue), Number(yValue))
//         .toFile(`${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`, function(err) {
//             if(err != null){
//                 console.log('sharp error', err)
//                 // return false;
//             };
//             console.log('image',`${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`);
            
//         });
//         return `${imagePath}thumb/${fileName.slice(0,fileName.length-4)}_${xValue}_${yValue}.jpg`;
//     }))(imagePath, fileName);
//     return answer;
// }
//   export default sharpUtil;