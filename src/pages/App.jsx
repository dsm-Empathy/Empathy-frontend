import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./main";
import MainDetail from "./mainDetail";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/detail/:number' element={<MainDetail/>} />
    </Routes>
  );
}

export default App;
