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
        <VideoCard 
          channel='safrudin'
          avatarSrc='https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/79541149_2625096010873059_4571907332706926592_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=DTkQdEu4mScAX-D0vDR&oh=962de8141de10f9f96e5d68dd033c08a&oe=5F74DCA9'
          song='safrdin song'
          url='https://instagram.fcgk8-1.fna.fbcdn.net/v/t50.2886-16/83220243_2453891188210631_143743540863219263_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fcgk8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=NC2SBNdrkiAAX_PDNDF&vs=17859545737675499_2166653105&_nc_vs=HBksFQAYJEdCUFg5UVRITzVjUXpiY0lBRF8yNkNQOXJmNEJia1lMQUFBRhUAAsgBABUAGCRHSzRwLWdTcEhrQXJFUlVKQUNwM3Jtd2dWUEprYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAABgAFtaR09Cwyrk%2FFQIoAkMzLBdAM7ul41P3zxgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&oe=5F4CFDD6&oh=cd6e0531b0c58a74c93fd474e856815f'
          likes={100}
          shares={30}
        />
        <VideoCard 
          channel='safrudin'
          avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/100px-Instagram_logo_2016.svg.png'
          song='safrdin song'
          url='https://instagram.fcgk8-1.fna.fbcdn.net/v/t50.2886-16/83220243_2453891188210631_143743540863219263_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fcgk8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=NC2SBNdrkiAAX_PDNDF&vs=17859545737675499_2166653105&_nc_vs=HBksFQAYJEdCUFg5UVRITzVjUXpiY0lBRF8yNkNQOXJmNEJia1lMQUFBRhUAAsgBABUAGCRHSzRwLWdTcEhrQXJFUlVKQUNwM3Jtd2dWUEprYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAABgAFtaR09Cwyrk%2FFQIoAkMzLBdAM7ul41P3zxgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&oe=5F4CFDD6&oh=cd6e0531b0c58a74c93fd474e856815f'
          likes={100}
          shares={30}
        />
      </div>
    </div>
  );
}

export default App;
