
// import addImage from './add-image';
// import helloWorld from './hello-world';
// helloWorld();
// addImage();

import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import _ from 'lodash';
import React from 'react';


const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

// heading.render(_.upperFirst('Hello World'));
heading.render();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development Mode');
} 
