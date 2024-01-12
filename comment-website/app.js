//import necessary modules
//require = loading the express module into the current script and returns the exports of that module
//express =>  This is the argument passed to the require function
// when a module is installed using npm, it can be imported into a script using the require function
const express =require('express');
const path = require('path');
// Middleware to parse incoming request bodies in a middleware before your handlers.
//require => import body-parser middleware module for Express.js that parses incoming request bodies enabling you to access the data in a convenient way.into the current script and returns the exports of that module
// This module is often used in Express.js applications to parse incoming HTTP request bodies. Parsing is necessary when handling form submissions or
//  requests that include data in the request body, such as POST requests.
const bodyParser = require('body-parser');

//create an instance of the express instance application
const app = express

// Set up middleware, Middleware functions are functions that have access to the request object (req), the response object (res)
//and the next function in the application’s request-response cycle.

// The express.static middleware is crucial for making sure that these static files are accessible to users when they visit your website.
//express.static=>  When a user requests a file, Express will look in the 'public' folder to see if it exists.
//look for the static files in the 'public' folder of the current directory
//path.join(__dirname, 'public'): This constructs an absolute path to the 'public' folder.
app.use(express.static(path.join(__dirname, 'public')));

//adding middleware which is part of the 'body-parser' 
//when the user submit a comment on the website, the data from the form is sent to the server
//The bodyParser.urlencoded middleware helps me parse the form data and make it available in a format that's easy to work with in the server code 
//extended is set to true to allows for parsing of nested objects in the Url encoded data 
//to helps handle more complex form submissions 
app.use(bodyParser.urlencoded({ extended:true }));