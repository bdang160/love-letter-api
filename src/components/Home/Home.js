import './Home.css';
import SiteHeader from '../SiteHeader/SiteHeader';
import TryItOut from '../TryItOut/TryItOut';

function Home() {
  return (
    <div className="Home">
      <SiteHeader/>
      <TryItOut/>
    </div>
  );
}

export default Home;
