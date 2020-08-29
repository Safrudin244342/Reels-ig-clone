import React from 'react';
import './App.css';
import VideoCard from './VideoCard'

function App() {
  return (
    <div className="app">
      
      <div class="header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/100px-Instagram_logo_2016.svg.png"  
          class="appLogo" 
        />
        <h1>Reels</h1>
      </div>

      <div class="main">
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
