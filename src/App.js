import './App.css';
import React, { useState } from 'react'
import { RandomUserCard } from './components/RandomUserCard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import More from './components/More';
import Author from './components/Author';

function App() {
  const [urlApi, useUrlApi] = useState('https://randomuser.me/api/?nat=mx');
  const [author, useAuthor] = useState('Fernando Cardoso Magaña');
  return (
    <Router>
      <div className="App">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="nav-item nav-link" href="#"><img className='pl-10' src='https://cdn-icons-png.flaticon.com/512/4140/4140047.png' height='30px'></img></a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to='/' className="nav-item nav-link">Random User</Link>
                <Link to='/author' className="nav-item nav-link" >Author</Link>
                <Link to='/more' className="nav-item nav-link" >More</Link>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/author' element={<Author name={author} />} />
          <Route path='/more' element={<More />} />
          <Route path='/' element={<RandomUserCard url={urlApi} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
