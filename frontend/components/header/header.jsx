import React from 'react';

import NavContainer from './navigation/nav_bar_container';
import WordSearch from './word_search/word_search_container';

const Header = () => (
  <header className='header'>
    <div className='header-content'>
      <div className='logo'>
        <h1 className='logo-title'>MyLexi</h1>
      </div>
      <NavContainer/>
      <WordSearch />
    </div>
  </header>
);

export default Header;
