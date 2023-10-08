import React from 'react';
import {  HashRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import GlobalStyle from './styled/Global';
import Layout from './pages/Layout';
import Home from './pages/Home';
const App = () => {
  return (
    <>
    <GlobalStyle/>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
};

export default App;