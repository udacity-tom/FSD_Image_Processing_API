# FSD Image Processing API

Full Stack Developer Nanodegree, Create a node based API to resize given images and cache said images for website implementation and subsequent delivery to a placeholder website. 


## Introduction/Usage/API Functionality

The API provides one key endpoint through which images can be resized and reformatted based on the users requirements and saved as thumbnails with the size embedded in the file name for later retrieval.

Through the use of a single URL call, once resized and reformatted the URL itself becomes a placeholder for delivering the image whereever needed. It could be used in website development, for example, by placing the required images in the assets directory of the server where the API resides. On calling the URL of the image together with the relevant query parameters, 

`localhost:3001/api/convertImage?filename=image.png&format=jpg&width=300&height=300`

the image will be resized and reformatted and saved in a 'thumbs' subdirectory. Subsequent calls will be served from disk rather than being resized and reformatted again.

The entire project was created from scratch as a new Typescript project. This project required the implementation of a specific architecture and structure to maintain scalability and seperate development and production code.
Using npm, scripts were written for testing, building, linting and prettifying.

Express is used on the server side to ease and simplify route implementation. The core library Sharp was used for image manipulation. Reformating and resizing images.

Middleware was written to take advantage of Sharp and provide basic user feedback and information on how to use the tool.

Unit tests are written in Jasmine. 

### Web API Additional Suggestions Added 
- Can accept and output other image formats other than JPG
- Modifiys thumbnail filename to include the image size (and file type)
- Adds in logging to record when images are processed and accessed

## Installation, Environment Setup

Clone the repository and make sure node and npm are installed in your local dev environment.
Install the relevant packages with the [node package manager](https://docs.npmjs.com/).
After installing the basic packages in a terminal run the following scripts from a terminal: 

* `npm i`
This will install the necessary packages and dependencies (package.json)
* `npm run start`
This will initiate the node server to run on the default port (Currently set at 3001)
* `npm run build`
Will build the distribution folders according to the webpack production configuration (/dist)
The production build will be available on localhost:3001 or whatever env port is allocated. 
* `npm run test`
Will run the suite of tests.


## Technologies Used

- Node (asynchronous endpoints for API access)
- Utilises the node file system apis for reading/writing images
- Express (for creating endpoints, routing, and serving files)
- TypeScript throughout the API
- Javascript (async, express, middleware, etc in a modular design)
- Jasmine (for JS testing)
- Basic Error handling



## About Udacity's Full Stack Javascript Developer Nanodegree

The goal of the Front End Web Developer Nanodegree program is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker. [Udacity Full Stack Javascript Developer Nanodegree](https://www.udacity.com/course/full-stack-javascript-developer-nanodegree--nd0067)