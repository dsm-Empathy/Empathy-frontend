import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./main";
import MainDetail from "./mainDetail";
import Search from "./search";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/detail/:number' element={<MainDetail/>} />
      <Route path='/search' element={<Search/>} />
    </Routes>
  );
}

export default App;
