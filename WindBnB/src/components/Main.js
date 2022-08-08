import React from 'react';

import './Main.css';

const Main = ({stays}) => {

  const getSubTitle = (stay) => {
    if (stay.type === 'Private room' || stay.type === 'Entire house') return stay.type;
    const beds = stay.beds ? `${stay.beds} bed${stay.beds > 1 ? 's' : ''}` : '';
    return `${stay.type}. ${beds}`;
  };

  return (
    <main>
      <div className='main__header'>
        <h1 className='main__header__title'>Stays in Finland</h1>
        <span className='main__header__nb-stays'>{stays.length > 12 ? '12+' : stays.length} stay{stays.length > 1 ? 's' : ''}</span>
      </div>

      <div className='main__content'>
        {stays.map((stay, id) => (
          <div className='stay-card' key={id}>

            <div className='stay-card__img'>
              <img className='stay-card__img'src={stay.photo} alt={stay.title} />
            </div>

            <div className='stay-card__content'>
              <div className='stay-card__content__data'>
                {stay.superHost &&
                  <div className='stay-card__content__data__tag'>super host</div>
                }
                <div className='stay-card__content__data__title' title={getSubTitle(stay)}>{getSubTitle(stay)}</div>
              </div>

              <div className='stay-card__content__rating'>
                <span className='stay-card__content__rating__icon material-icons' >star</span>
                <span className='stay-card__content__rating__text'>{stay.rating.toFixed(2)}</span>
              </div>
            </div>

            <h2 className='stay-card__title'>{stay.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );

};

export default Main;