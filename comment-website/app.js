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
const bodyParser = require('body-parser')