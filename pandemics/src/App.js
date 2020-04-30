import React from 'react';
import './App.scss';

const CenterLine = () => {
  return <div className="CenterLine"/>
}

const TimeLine = () => 
  <div className="TimeLine">
    <CenterLine></CenterLine>
  </div>

const App = () => <TimeLine/>

export default App;