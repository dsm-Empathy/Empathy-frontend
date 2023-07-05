import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./main";
import MainDetail from "./mainDetail";
import Search from "./search";
import ACDetail from "./ACDetail";
import Q_and_A from './Q&A'
import Announcement from "./Announcement";
import LoginPage from "./login";
import SignupPage from "./signup";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/detail/:number' element={<MainDetail/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/announcement/detail/:number' element={<ACDetail/>} />
      <Route path='/Q&A' element={<Q_and_A />} />
      <Route path='/Announcement' element={<Announcement />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  );
}

export default App;
