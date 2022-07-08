import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';
import Header from './components/Header/Header';
import MainLayout from './components/MainLayout/MainLayout';

import './App.scss';

function App() {
  return (
    <MainLayout>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path=":currencyId" element={<DetailPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
