import './App.css';
import Navbar from './components/NavBar/NavBar';
import SiteHeader from './components/SiteHeader/SiteHeader';
import TryItOut from './components/TryItOut/TryItOut';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    // send HTTP request
    fetch("http://localhost:3001/") // TODO (bdang) Need to change 3001 to something else
    .then(response => response.json())
    .then(console.log)
  }, [])

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
