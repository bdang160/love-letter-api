import './App.css';
import Navbar from './components/NavBar/NavBar';
import SiteHeader from './components/SiteHeader/SiteHeader';
import TryItOut from './components/TryItOut/TryItOut';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SiteHeader/>
      <TryItOut/>
    </div>
  );
}

export default App;