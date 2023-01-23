
// import addImage from './add-image';
// import helloWorld from './hello-world';
// helloWorld();
// addImage();

import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
helloWorldButton.render();
