import React from "react";
import Homepage1 from "./pages/Homepage1";
import Homepage2 from "./pages/Homepage2";
import Signup from "./pages/Signup";
import Login from "./pages/LoginForm";
import ExplorePage from "./pages/ExplorePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/homepage2" element={<Homepage2 />} /> 
        <Route path="/explore" element={<ExplorePage />} /> 
      </Routes>
    </Router>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';

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
//       </header>
//     </div>
//   );
// }

// export default App;
