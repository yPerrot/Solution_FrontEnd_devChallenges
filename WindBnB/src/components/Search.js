import { useState } from 'react';
import LocationSelector from './LocationSelector';
import GuestSelector from './GuestSelector';
import './Search.css';

/**
 * Props:
 *  - location: string 
 *  - setLocation: function
 *  - adultGuests: number
 *  - setAdultGuests: function
 *  - childrenGuests: number
 *  - setChildrenGuests: function
 *  - close: function
 */
const Search = (props) => {
  const [selectedInput, setSelectedInput] = useState('location');

  const setSearchLocation = () => setSelectedInput('location');
  const setSearchGuests = () => setSelectedInput('guests');

  const getGuestAsText = () => {
    const guests = props.adultGuests + props.childrenGuests;
    if (guests === 0) return 'Add guests';
    if (guests === 1) return '1 guest';
    if (guests > 12) return '12+ guests';
    return guests + ' guests';
  };

  return (
    <>
      <div className='grey' onClick={props.close}></div>

      <div className='search-dialog'>

        <div className='search-dialog__header'>
          <p>Edit your search</p>
          <button onClick={props.close}>
            <span className="material-icons">close</span>
          </button>
        </div>

        <div className='search-dialog__main'>

          <div 
            className={`search-dialog__in ${selectedInput === 'location' ? 'focus' : ''}`} 
            onClick={setSearchLocation}
          >
            <div className='in-label'>Location</div>
            <input
              value={props.location}
              placeholder='Add location'
              readOnly
            ></input>
          </div>

          <div 
            className={`search-dialog__in ${selectedInput === 'guests' ? 'focus' : ''}`}
            onClick={setSearchGuests}
          >
            <div className='in-label'>Guests</div>
            <div 
              className={`in-value ${(props.adultGuests + props.childrenGuests) === 0 ? 'in-value-placeholder' : ''}`} 
            >
              {getGuestAsText()}
            </div>
          </div>

          {selectedInput === 'location' ?
            <LocationSelector setLocation={props.setLocation}/>
            :
            <GuestSelector 
              adultGuests={props.adultGuests}
              setAdultGuests={props.setAdultGuests}
              childrenGuests={props.childrenGuests}
              setChildrenGuests={props.setChildrenGuests}
            />
          }

          <div className='search-dialog__btn'>
            <button onClick={props.updateStaysList}>
              <span className='material-icons'>search</span>
              search
            </button>
          </div>

        </div>

      </div>
    </>
  );
};

export default Search;