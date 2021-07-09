# FSD Image Processing API

Full Stack Developer Nanodegree, Create a node based API to resize given images and cache said images for website implementation and subsequent delivery to a placeholder website. 


## Introduction/API Functionality

The API provides one key endpoint through which images can be resized and reformatted based on the users requirements and saved as thumbnails with the size embedded in the file name for later retrieval.

Through the use of a single URL call, once resized and reformatted the URL itself becomes a placeholder for delivering the image whereever needed. It could be used in website development, for example, by placing the required images in the assets directory of the server where the API resides. 

The entire project was created from scratch as a new Typescript project. This project required the implementation of a specific architecture and structure to maintain scalability and seperate development and production code.
Using npm, scripts were written for testing, building, linting and prettifying.

Express is used on the server side to ease and simplify route implementation and serving files. The core image library Sharp was used for image manipulation, reformating and resizing images.

Middleware was written to take advantage of Sharp and provide basic user feedback and information on how to use the tool.

Unit tests are written in Jasmine. 

## API Usage

On calling the URL of the image together with the relevant query parameters, 

`localhost:3001/api/convertImage?filename=image.png&format=jpg&width=300&height=300`

the image will be resized and reformatted and saved in a 'thumbs' subdirectory. Subsequent calls to the same URL will be served from disk rather than being resized and reformatted again.

A full description of how to use the API is accessable via

`localhost:3001/api/`

### Web API Additional Suggestions Added 
- Can accept and output other image formats other than JPG
- Modifiys thumbnail filename to include the image size (and file type)
- Adds in logging to record when images are processed, accessed and whenever the API is called

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

Students who graduate from the program will be able to:
• Build client-side experiences and applications using Angular, collecting data from users and from
backends, providing rich user interactions and organizing code and data.
• Build server-side executed code with TypeScript and integrate with 3rd party code such as
Angular’s Server Side Rendering.
• Leverage Express.js to architect and build APIs that power dynamic functionality and to generate
and supply data to web and mobile clients.
• Persist data to a database, query and retrieve data, and pass this data all the way through to
various client devices.

 [Udacity Full Stack Javascript Developer Nanodegree](https://www.udacity.com/course/full-stack-javascript-developer-nanodegree--nd0067)