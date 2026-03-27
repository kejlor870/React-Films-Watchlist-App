import { useState } from 'react'
import './App.css'
import SearchPage from './components/SearchPage'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WatchlistPage from './components/WatchlistPage';
import HeaderNav from './components/Header/HeaderNav';
import { WatchlistProvider } from './context/WatchlistContext';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/LoginPage';

function App() {

  return (
    <AuthProvider>
    <WatchlistProvider>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Header with navigation */}
        <HeaderNav />

        <main className='flex-1 p-4'>
          <Routes>
            <Route path='/' element={ <SearchPage /> }/>
            <Route path='/watchlist' element={ <WatchlistPage /> }/>
            <Route path='/login' element={ <LoginPage /> } />

            {/* NOT FOUND */}
            <Route path='*' element={ <p> 404 - NOT FOUND </p> } />
          </Routes>
        </main>
        
        <footer className='footer p-6 flex justify-around'>
          <div className='flex flex-wrap gap-5 items-center'>
            <img 
              src='blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
              className='h-5'
              alt='TMDB logo'
            />
            <p>
              This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
    </WatchlistProvider>
    </AuthProvider>
  )
}

export default App
