import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './Views/MainPage';
import NavBar from './Components/NavBar';
import ArticlePage from './Views/articlePage';

function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/article" element={<ArticlePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
