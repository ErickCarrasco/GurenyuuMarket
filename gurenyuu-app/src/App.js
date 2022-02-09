import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './Views/MainPage';
import NavBar from './Components/NavBar';
import ArticlePage from './Views/articlePage';
import Login from './Views/logPage';
import Register from './Views/register';
import FooterPage from './Components/footer';

function App() {
  return (
    <div className="content">
    <Router>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/article" element={<ArticlePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>}/>
      </Routes>
      <FooterPage/>
    </Router>
    </div>
  );
}

export default App;
