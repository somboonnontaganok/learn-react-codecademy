import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div className="big">by Somboon Nontaganok</div>
//       </header>
//     </div>
//   );
// }

// export default App;
// This work 
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.floor(Math.random() * 2) ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg',
  width: '1024' //1024 pixels
};
let img;

// if/else statement begins here:
if (coinToss() === "heads") {
  img = (<img src={pics.kitty} width={pics.width}/>);
}
else {
  img = (<img src={pics.doggy} width={pics.width}/>);
}

function App() {
  return (
    <div>
      {img}
    </div>
    
  );
}

export default App;