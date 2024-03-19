import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from "../../assets/pexels-venya-pak-7971025 (2160p).mp4"
const VideoPlayer = ({playState, setPlayState}) => {
    
  const player = useRef(null)
  const closeplayer=(e)=>{
     if(e.target === player.current){
      setPlayState(false)
     } 
  }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closeplayer}> 
       <video src={video}  autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer