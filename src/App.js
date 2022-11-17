import React from 'react';
import ChildComp from "./component/childComp";
import Home from "./component/Home";
import {Route,Routes, BrowserRouter as Router,} from 'react-router-dom';
import './App.css';


function App() {

  return (
    <>
   <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/childcomp" element={<ChildComp />}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
