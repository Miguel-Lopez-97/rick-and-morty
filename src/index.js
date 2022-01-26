import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Characters from './Components/Character/Characters';
import { Episodes } from './Components/Episodes/Episodes';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}>

        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='*' element={<Navigate replace to='/' />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
