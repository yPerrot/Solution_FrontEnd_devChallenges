import React from 'react';

import logo from '../logo.svg';
import './Header.css';

const Header = (props) => {

  const getGuestAsText = () => {
    if (props.guests === 0) return '';
    if (props.guests === 1) return '1 guest';
    if (props.guests > 12) return '12+ guests';
    return props.guests + ' guests';
  };

  return (
    <header className='header'>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className='search'>
        <input className='search__location-input' 
          value={props.location} 
          readOnly 
          placeholder='Add location'
          
          onClick={props.displayFullSearch}
        >
        </input>
        <input className='search__guest-input' 
          value={getGuestAsText()} 
          readOnly 
          placeholder='Add guests'
          
          onClick={props.displayFullSearch}
        >
        </input>
        <button className='search__btn' onClick={props.updateStaysList}>
          <span className='material-icons'>search</span>
        </button>
      </div>

    </header>
  );
};

export default Header;