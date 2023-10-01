import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NetflixShow from './Pages/NetflixShow';
import Home from './Pages/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/netflixShow' element={<NetflixShow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
