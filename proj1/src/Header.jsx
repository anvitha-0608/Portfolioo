import React from 'react';
import photo from './photo.png';

function Header() {
  return (
    <header className="portfolio-header">
      <img
        src={photo}
        alt="Anvitha Reddy"
        className="profile-img"
      />

      <h1>Anvitha Reddy</h1>
      <p>My Personal Portfolio</p>
    </header>
  );
}

export default Header;