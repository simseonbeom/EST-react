import React from './lib/react.js'
import ReactDOM from './lib/react-dom.js'
import {Greeting}  from './data.js'


// console.log( React.version );
// console.log( ReactDOM.version );
// console.log(Greeting);

const getRandom = (n) => {
  return Math.floor(Math.random() * n)
}

const keys = Object.keys(Greeting);
const key = keys[getRandom(keys.length)];
const value = Greeting[key];

const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);



const element = React.createElement(
  'h1',
  { title: `나라별 인사말 = ${key}`},
  `인사말 : ${value}`
)


root.render(element)












