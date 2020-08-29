import React, { useRef, useState } from 'react'
import './VideoCard.css'

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  return (
    <div class="videocard">
      <video 
        src='https://instagram.fcgk8-1.fna.fbcdn.net/v/t50.2886-16/83220243_2453891188210631_143743540863219263_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fcgk8-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=NC2SBNdrkiAAX_PDNDF&vs=17859545737675499_2166653105&_nc_vs=HBksFQAYJEdCUFg5UVRITzVjUXpiY0lBRF8yNkNQOXJmNEJia1lMQUFBRhUAAsgBABUAGCRHSzRwLWdTcEhrQXJFUlVKQUNwM3Jtd2dWUEprYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAABgAFtaR09Cwyrk%2FFQIoAkMzLBdAM7ul41P3zxgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&oe=5F4CFDD6&oh=cd6e0531b0c58a74c93fd474e856815f'
        alt='IG reel video'
        class='videoplayer'
        ref={videoRef}
        onClick={onVideoPress}
        loop
      />
    </div>
  )
}

export default VideoCard
