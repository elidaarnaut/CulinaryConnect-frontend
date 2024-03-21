import Menu from "./components/Menu";
import pizzaPic from "./assets/pizza-ilustration.png";
// import Footer from "./components/Footer";
import RecipeItem from "./components/RecipeItem";

function App() {
  return (
    <div className="appBody">
      {/* <Menu />
      <div className="main">
        <div className="mainText">
          <h1>CulinaryConnect</h1>
          <p>Discover endless culinary inspiration with our collection of delicous recipes from all areound the globe</p>
          <button>Join us!</button>
        </div>
        
        <img src={pizzaPic} className="pizzaIlustration" alt="Pizza Ilustration"></img>
      </div> */}
      {/* <Footer /> */}
      <RecipeItem></RecipeItem>
    </div>
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
