import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.thehoth.com/wp-content/uploads/2018/06/1a.png' />
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://c0.wallpaperflare.com/preview/282/489/126/beach-exotic-holiday-horizon.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New Post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
