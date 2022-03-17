import './App.css';
import Header from './components/Header';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="px-3 py-6">
       <Navbar /> 
       <Header />
       <LogoCarousel />
    </div>
  );
}

export default App;
