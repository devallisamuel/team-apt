import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Activity } from './components/pages/activity/activity';
import { Landing } from './components/pages/landing/landing';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Landing/>}>
        <Route path='' element = {<Activity/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
