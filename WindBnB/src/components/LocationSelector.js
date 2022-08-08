import stays from '../data/stays.json';
import './LocationSelector.css';

const LocationSelector = (props) => {

  const getLocations = () => [ ...new Set(stays.map(stay => stay.city + ', ' + stay.country))];

  return (
    <div className='location-selector'>
      {getLocations().map((loc, id) => (
        <button key={id} className='location-selector__btn' onClick={() => {console.log(loc);props.setLocation(loc);}}>
          <span className='material-icons location-selector__btn__icon'> pin_drop </span>
          {loc}
        </button>
      ))}
    </div>
  );
};

export default LocationSelector;