import logo from './logo.svg';
import './App.css';
import Screen1 from './components/Screen1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Screen1/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Screen1/>} />
      <Route path='/home'element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
