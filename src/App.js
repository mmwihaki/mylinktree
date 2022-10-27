import React from 'react'
import LinkButton from './components/LinkButton'
import TextBanner from './components/TextBanner'
import ProfilePic from './components/ProfilePic'
import picture from './profilephoto.png'

function App() {
  return (
    <div>
      <ProfilePic picture={picture} />
      <TextBanner title='Annette Black' />
      <LinkButton name='Twitter Link' title='' link='#'/>
      <LinkButton name='Zuri Team' link='#' />
      <LinkButton name='Zuri Books' link='#' />
      <LinkButton name='Python Books' link='#' />
      <LinkButton name='Background Check for Coders' link='#' />
      <LinkButton name='Design books' link='#' />
      <socialMedia img="" link='#' />
    </div>
  )
}

export default App;
