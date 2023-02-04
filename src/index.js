import React from 'react';
import ReactDOM from 'react-dom/client';
import {CssBaseline} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Main from './Main';
import About from './About';
import SwipeableEdgeDrawer from './SwipableEdgeDrawer';
import MyDrawer from './MyDrawer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <CssBaseline />  
      <Routes>
        <Route path='/concepts' element={<ResponsiveAppBar />}>                    
            <Route path='' element={<Main />}/>
            <Route path='about' element={<About />}/>
        </Route>
        <Route path='/swipedrawer' element={<SwipeableEdgeDrawer />}/>
        <Route path='/mydrawer' element={<MyDrawer />}/>
      </Routes>
    </BrowserRouter>
);
