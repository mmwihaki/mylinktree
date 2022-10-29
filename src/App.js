import React from 'react';
import LinkButton from './components/LinkButton';
import TextBanner from './components/TextBanner';
import ProfilePic from './components/ProfilePic';
import picture from './profilephoto.png';
import './App.css';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import ZuriLogo from './zuri.png';
import IFGLogo from './igf.png'
import AvatarShare from './components/AvatarShare';
import shareIcon from './share.png'


function App() {
  return (
    <div id='main'>
      <div class='content'>
        <div class='profile'>
          <ProfilePic picture={picture} />
          <TextBanner id='twitter' title='Annette Black' />
          <AvatarShare share={shareIcon} />
        </div>

        <div>
          <LinkButton id='' name='Twitter Link' title='' link='#'/>
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

        <div className='footerSection'>
          <div className='footerContainer'>
            <div className='footerContent'>
                <Footer className='footerItems'
                  ZuriLogo={ZuriLogo}
                  text = 'HNG Internship 9 Frontend Task'
                  IFGLogo={IFGLogo} />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App;
