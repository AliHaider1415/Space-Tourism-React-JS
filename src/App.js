import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destination from './components/Destination';
import CrewPage from './components/CrewPage';
import TechPage from './components/TechPage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path="/Destination/*" element = {<Destination/>}/>
        <Route path = '/CrewPage/*' element = {<CrewPage/>}/>
        <Route path = '/TechPage/*' element = {<TechPage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
