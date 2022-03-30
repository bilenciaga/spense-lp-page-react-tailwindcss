import './App.css';
import Header from './components/Header';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import Body from './components/Body'
function App() {
  return (
    <div className="px-3 py-6">
       <Navbar /> 
       <Header />
       <LogoCarousel />
       <Body />
    </div>
  );
}

export default App;
