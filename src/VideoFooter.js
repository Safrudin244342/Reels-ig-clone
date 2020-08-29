import React from 'react'
import './VideoFooter.css'
import { Button, Avatar } from '@material-ui/core'
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from "react-ticker"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ModeCommentIcon from "@material-ui/icons/ModeComment"
import SendIcon from "@material-ui/icons/Send"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div class="videofooter">
      
      <div class='videofootertext'>
        <Avatar src={avatarSrc} />
        <h3>
          {channel}<Button> Follow </Button>
        </h3>
      </div>

      <div class="videofooterticker">
        <Ticker mode='smooth'>
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      
      <div class='videofooteraction'>
        <div class='left'>
          <FavoriteIcon fontSize='large' />
          <ModeCommentIcon fontSize='large' />
          <SendIcon fontSize='large' />
          <MoreHorizIcon fontSize='large' />
        </div>

        <div class='right'>
          <div class='stat'>
            <FavoriteIcon />
            <p>{likes}</p>
          </div>

          <div class='stat'>
            <ModeCommentIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoFooter
