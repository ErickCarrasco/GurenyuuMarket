import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './Views/MainPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
