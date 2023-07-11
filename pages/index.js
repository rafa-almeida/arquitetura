import React from 'react'
import { Container } from '@material-ui/core'
import index from '../styles/Index.module.css'
import TemplateDefault from '../src/templates/Default'
import Video1 from '../src/components/video/video1.mp4'
import ReactPlayer from 'react-player';

export default function Home() {
  return (
    <TemplateDefault>
      <Container >
      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width='100%'
        height= '100%'
        controls
     />

      </Container>
    </TemplateDefault>
  )
}

