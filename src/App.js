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
function Image() {
    return <img src='https://content.codecademy.com/courses/React/react_photo-goose.jpg' 
    onClick={makeDoggy}/>
}

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
  e.target.setAttribute('width', 1000);
}

function App() {
  return (
    <div>
      <Image />
    </div>
    
  );
}

export default App;