import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Activity } from './components/pages/activity/activity';
import { Landing } from './components/pages/landing/landing';
import { AddWeight } from 'components/pages/addWeight/addWeight';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Landing/>}>
        <Route path='' element = {<Activity/>}></Route>
        <Route path='/weight' element = {<AddWeight/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
