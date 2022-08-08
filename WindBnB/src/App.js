import React, { useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main';

import './App.css';

import STAYS from './data/stays.json';

const App = () => {

  const [location, setLocation] = useState('Helsinki, Finland');
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [stays, setStays] = useState(STAYS);

  const displayFullSearch = () => {
    document.querySelector('body').style.overflow = 'hidden';
    setDisplaySearch(true);
  };
  
  const hideFullSearch = () => {
    document.querySelector('body').style.overflow = 'auto';
    setDisplaySearch(false);
  };

  const updateStaysList = () => {
    if (displaySearch) hideFullSearch();
    setStays(STAYS.filter((stays) => {
      return stays.maxGuests >= (adultGuests + childrenGuests) && location === (stays.city + ', ' + stays.country);
    }));
  };

  return (
    <>
      {displaySearch && <Search 
        location={location} 
        setLocation={setLocation} 

        adultGuests={adultGuests}
        setAdultGuests={setAdultGuests}
        childrenGuests={childrenGuests}
        setChildrenGuests={setChildrenGuests}

        close={hideFullSearch}
        updateStaysList={updateStaysList}
      />}
      <Header 
        location={location} 
        guests={adultGuests + childrenGuests} 
        displayFullSearch={displayFullSearch} 
        updateStaysList={updateStaysList}
      />
      <Main
        stays={stays}
      />
    </>
  );
};

export default App;