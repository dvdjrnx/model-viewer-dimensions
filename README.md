# `<model-viewer>` `getDimensions()` test

This project is a prototyping test of `<model-viewer>`'s `getDimensions()` method. It mounts a `<model-viewer>` instance when a file is dropped on the UI's drop zone. The `<model-viewer>`'s `src` attribute is set to an object URL of the model. The moment the model loads, `getDimensions()` is called and x, y, and z dimensions are displayed.

Included in the code is a call to `console.time('getDimensions')` that runs on file drop, and a `console.endTime('getDimensions')` call that runs once dimensions are set in state. This can be used to help guage the performance viability of using `<model-viewer>` to get dimensions from models of various file sizes.

## Getting started

Clone this repo and then run the following commands:

```
# cd into project directory
$ cd model-viewer-dimensions

# install dependencies
$ npm install

# run the web app
$ npm start
```
