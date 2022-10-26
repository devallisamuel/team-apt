import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Activity } from './components/pages/activity/activity';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Activity/>}></Route>
    </Routes>
  );
}

export default App;
