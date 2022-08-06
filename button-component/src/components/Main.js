import React from 'react';
import Button from './Button';

const Main = () => {

    return (
        <div className='main'>

            <h1>Buttons</h1>

            <div className='main__row'>
                <Button />
            </div>

            <div className='main__row'>
                <Button variant='outline'/>
            </div>

            <div className='main__row'>
                <Button variant='text'/>
            </div>
            
            <div className='main__row'>
                <Button disableShadow/>
            </div>

            <div className='main__row'>
                <Button disabled/>
                <Button variant="text" disabled/>
            </div>

            <div className='main__row'>
                <Button color="primary" startIcon="add_shopping_cart" />
                <Button color="primary" endIcon="add_shopping_cart" />
            </div>

            <div className='main__row'>
                <Button color="primary" size="sm" />
                <Button color="primary" />
                <Button color="primary" size="lg" />
            </div>

            <div className='main__row'>
                <Button color="default" />
                <Button text="Primary" color="primary" />
                <Button text="Secondary" color="secondary" />
                <Button text="Danger" color="danger" />
            </div>

        </div>
    )
}

export default Main;