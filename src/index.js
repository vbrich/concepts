import React from 'react';
import ReactDOM from 'react-dom/client';
import {CssBaseline} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Favorites from './Favorites';
import Main from './Main';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <CssBaseline />  
      <Routes>
        <Route path='/*' element={<ResponsiveAppBar />}>                    
            <Route path='' element={<Main />}/>
            <Route path='favorites' element={<Favorites />}/>
            <Route path='about' element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
);
