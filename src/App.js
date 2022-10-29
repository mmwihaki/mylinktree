import React from 'react';
import LinkButton from './components/LinkButton';
import TextBanner from './components/TextBanner';
import ProfilePic from './components/ProfilePic';
import picture from './profilephoto.png';
import './App.css'
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div id='main'>
      <div class='content'>
        <div class='profile'>
        <ProfilePic picture={picture} />
        <TextBanner id='twitter' title='Annette Black' />
        </div>

        <div>
          <LinkButton  class='btn' id='' name='Twitter Link' title='' link='#'/>
          <LinkButton id='btn__zuri' name='Zuri Team' link='https://training.zuri.team/' />
          <LinkButton id='books' name='Zuri Books' link='http://books.zuri.team' />
          <LinkButton id='book__python' name='Python Books' link='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' />
          <LinkButton id='pitch' name='Background Check for Coders' link='https://background.zuri.team/' />
          <LinkButton id='book__design' name='Design books' link='https://books.zuri.team/design-rules' />
        </div>

        <div class='social'>
          <div class='socialContainer'>
            <div class='socialContent'>
              <div class='socialIcons'>
                <SocialMedia/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer class='footer'
        text="HNG Internship 9 Frontend Task"
      />

    </div>
  )
}

export default App;
