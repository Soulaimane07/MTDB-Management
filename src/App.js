import { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home'
import Navbar from './Pages/Navbar/Navbar'
import Series from './Pages/Series/Series';
import DetailsSeries from './Pages/Series/Details/Details'; 
import CreateSeries from './Pages/Series/create/Create';

import Genres from './Pages/Genres/Genres';
import CreateGenres from './Pages/Genres/content/Create'
import DetailsGenres from './Pages/Genres/content/Details'

import Networks from './Pages/Networks/Networks';

import Users from './Pages/Users.js/Users';
import Login from './Pages/Auth/Login/Login';
import Sign from './Pages/Auth/Sign/Sign';
import Profile from './Pages/Profile/Profile';
import Movies from './Pages/Movies/Movies';

function App() {
  const [logged, setLogged] = useState(false)
  const [account, setAccount] = useState({
    "lang":"english",
    "theme": "light"
  })

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   user?.email && user?.pass && setLogged(true)

  //   setAccount(JSON.parse(localStorage.getItem('account')))
  // }, []);

  const lang = account.lang == null ? 'english' : account.lang
  const theme = account.theme == null ? 'light' : account.theme


  return (
    <div className={`app ${theme === "dark" && 'dark'}`}>
      <BrowserRouter>
        {/* {logged ?
          <> */}
            <div className='content'>
              <Routes>
                <Route path='/' element={<Home lang={lang} />} />
                <Route path='tv_shows'>
                    <Route path='' element={<Series lang={lang} />} />
                    <Route path={`details/:id`} element={<DetailsSeries />} />
                    <Route path='create' element={<CreateSeries />} />
                </Route>
                <Route path='movies'>
                  <Route path='' element={<Movies />} />
                </Route>
                <Route path='/genres'>
                    <Route path='' element={<Genres lang={lang} />} />
                    <Route path={`details/:id`} element={<DetailsGenres />} />
                    <Route path='create' element={<CreateGenres />} />
                </Route>
                <Route path='/networks' element={<Networks lang={lang} />} />
                <Route path='/users' element={<Users lang={lang} />} />
                <Route path='/account' element={<Profile lang={lang} />} />
              </Routes>
            </div>
            <Navbar lang={lang} />
          {/* </>
        : 
          <Routes>
            <Route path='/login' element={<Login setLogged={setLogged} lang={lang} /> } />
            <Route path='/signup' element={<Sign setLogged={setLogged} lang={lang} /> } />
          </Routes>
        } */}
      </BrowserRouter>
    </div>
  );
}

export default App;