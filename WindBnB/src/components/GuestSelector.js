import { useState } from 'react';
import './GuestSelector.css';

/**
 * Props:
 *  - adultGuests: number
 *  - setAdultGuests: function
 *  - childrenGuests: number
 *  - setChildrenGuests: function
 */
const GuestSelector = (props) => {

  const decreaseAdult = () => {
    if (props.adultGuests > 0) {
      props.setAdultGuests(props.adultGuests - 1);
    }  
  };

  const increaseAdult = () => {
    props.setAdultGuests(props.adultGuests + 1);
  };

  const decreaseChildren = () => {
    if (props.childrenGuests > 0) {
      props.setChildrenGuests(props.childrenGuests - 1);
    }  
  };

  const increaseChildren = () => {
    props.setChildrenGuests(props.childrenGuests + 1);
  };

  return (
    <div className='guest-selector'>

      <div className='guest-picker'>
        <p className='guest-picker__title'>Adults</p>
        <p className='guest-picker__sub-title'>Ages 13 or above</p>
        <div className='guest-picker__input'>
          <button className='guest-picker__input__btn' onClick={decreaseAdult}>-</button>
          <div className='guest-picker__input__value'>{props.adultGuests}</div>
          <button className='guest-picker__input__btn' onClick={increaseAdult}>+</button>
        </div>
      </div>

      <div className='guest-picker'>
        <p className='guest-picker__title'>Children</p>
        <p className='guest-picker__sub-title'>Ages 2 - 12</p>
        <div className='guest-picker__input'>
          <button className='guest-picker__input__btn' onClick={decreaseChildren}>-</button>
          <div className='guest-picker__input__value'>{props.childrenGuests}</div>
          <button className='guest-picker__input__btn' onClick={increaseChildren}>+</button>
        </div>
      </div>

    </div>
  );

};

export default GuestSelector;