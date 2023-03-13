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
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}><h1>{person}</h1></li>);

function App() {
  return (
    <div>
      <ul>{peopleLis}</ul>
    </div>
    
  );
}

export default App;