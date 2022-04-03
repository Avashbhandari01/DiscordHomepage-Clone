import './App.css';
import Container1 from './Components/Container1';
import Container2 from './Components/Container2';
import Container3 from './Components/Container3';
import Container4 from './Components/Container4';
import Container5 from './Components/Container5';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Footer />
    </div>
  );
}

export default App;
