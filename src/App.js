import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard'
import db from './firebase'

function App() {

  const [reels, setReels] = useState([])

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

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
        {reels.map(({ channel, avatarSrc, song, url, likes, shares} ) => (
          <VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
