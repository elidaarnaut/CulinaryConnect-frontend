import React from "react";
import Homepage1 from "./pages/Homepage1";
import Homepage2 from "./pages/Homepage2";
import Signup from "./pages/Signup";
import Login from "./pages/LoginForm";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ExplorePage from "./pages/ExplorePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import RecipeForm from "./pages/RecipeForm";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} /> 
        <Route path="/homepage2" element={<Homepage2 />} /> 
        <Route path="/addRecipe" element={<RecipeForm />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/favorites" element={<FavoritesPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/settings" element={<SettingsPage />} /> 

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
