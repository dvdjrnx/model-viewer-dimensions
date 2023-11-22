# model-viewer getDimensions() test

This project is a prototyping test of `<model-viewer>`'s `getDimensions()` method. It mounts a `<model-viewer>` instance when a file is dropped on the UI's drop zone, and the `<model-viewer>`'s `src` attribute is set to an object URL of the model. The moment the model loads, `getDimensions()` is called and x, y, and z dimensions are displayed.

Included in the code is a call to `console.time('getDimensions')` that runs on file drop, and a `console.endTime('getDimensions')` call that runs once dimensions are set in state. This can be used to help guage the performance viability of using `<model-viewer>` to get dimensions from models of various file sizes.

## Viewing the project

This project can be previewed at https://dvdjrnx.github.io/model-viewer-dimensions.

There is a small "hamburger-draco.glb" file in the public folder of this repo. You can [download the .glb file](https://github.com/dvdjrnx/model-viewer-dimensions/blob/master/public/hamburger-draco.glb) and used to test functionality if you don't have any .glb files handy yourself. Whatever .glb file you use, you simply need to drag and drop the file onto the dropzone on the project page and it will show you both the model and its dimensions.

## Getting started

Clone this repo and then run the following commands:

```bash
# cd into project directory
$ cd model-viewer-dimensions

# install dependencies
$ npm install

# run the web app
$ npm start
```
