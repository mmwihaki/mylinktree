import React from 'react';
import LinkButton from './components/LinkButton';
import TextBanner from './components/TextBanner';
import ProfilePic from './components/ProfilePic';
import picture from './profilephoto.png';
import './App.css';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer'


function App() {
  return (
    <div id='main'>
      <div class='content'>
        <div class='profile'>
        <ProfilePic picture={picture} />
        <TextBanner id='twitter' title='Annette Black' />
        </div>

        <div>
          <LinkButton  className='btn' id='' name='Twitter Link' title='' link='#'/>
          <LinkButton id='btn__zuri' name='Zuri Team' link='https://training.zuri.team/' />
          <LinkButton id='books' name='Zuri Books' link='http://books.zuri.team' />
          <LinkButton id='book__python' name='Python Books' link='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' />
          <LinkButton id='pitch' name='Background Check for Coders' link='https://background.zuri.team/' />
          <LinkButton id='book__design' name='Design books' link='https://books.zuri.team/design-rules' />
        </div>

        <div className='socialSection'>
          <div className='socialContainer'>
            <div className='socialContent'>
              <div className='socialIcons'>
                <SocialMedia/>
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className=''>
            <div className=''>
              <div className=''>
                <Foooter/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
