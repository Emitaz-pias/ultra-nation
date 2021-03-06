import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./Country/Country";

function App() {
  const [countries, setContries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setContries(data));
  }, []);
  const handleAddButton = () => {
    console.log("hi there");
  };
  return (
    <div className="App">
      <h2>Countries : {countries.length}</h2>
      <ul>
        {countries.map((country) => (
          <Country
          key={country.name}
            handleAddButton={handleAddButton}
            country={country}
          ></Country>
        ))}
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
