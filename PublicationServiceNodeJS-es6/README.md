## Introduction

The purpose of this project is to demonstrate some angular and node concepts in my graduate software design class.

The node project exposes a set of simple RESTful services using the express package.  Data is returned from a simple JSON file, but the code simulates using Promises because a real system would probably pull this data from another source (e.g., A MongoDB database).  See app.js for how the web server is bootstrapped, and /services/PaperService.js to see how the RESTFul endpoints are constructed.

The angular component of the project is boostraped from the /public directory.  This app was cloned from my personal homepage to preserve the ability to show how routing works.  Most of the interesting stuff is exposed via the /public/partials/demo.html.  Note that the controller uses async techniques to call services exposed by the express engine.  There is a custom service at /public/js/services.js that shows how this works.

One other thing of note is that I started to move the node components to ES-6, so this project requires node.js > version 4

Enjoy!

## Usage

To start the project type `node app.js`.  Make sure that you run 'npm install' first to ensure
that you have all of the required dependencies as this project uses node.js under the covers
to provide the web services.

The Angular app can be bootstrapped from `localhost:3000`

The services can be called as follows:
* `http://localhost:3000/publications` - get all publications
* `http://localhost:3000/publications?limit=x&offset=y` - get all publications but filter using a limit and offset value.  Note x and y are integers, indexing is zero based
* `http://localhost:3000/publications/id` - get a particular publication, note id is an integer matching an individual publication id

## Properties

This is a demonstration application, some properties such as port number are hard coded. Note in the main /app.js file has the follwoing line of code `app.set('port', process.env.PORT || 3000);`.  Assuming its obvious what you need to do to change this.
