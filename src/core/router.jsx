import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../page/Detail';
import Main from '../page/Main';
import NotFound from '../page/NotFound';
import Header from '../component/Header';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
