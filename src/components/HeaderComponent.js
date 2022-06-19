import React from 'react';

const Title = props => {
    return (
        <div >
            <h1>Alexander Hamilton</h1>
            <p className="subtitle">US Secretary of Treasury & Cultural Icon</p>
        </div>
    );
}

const HeaderImage = props => {
    return (
        <div id="header-img-div">
            <img id="header-img" src="/img/dollar-bill-portrait.jpeg" alt='Hamilton on 10 dollar bill' />
            <p className='img-caption'>The Ten Dollar Founding Father</p>
        </div>
    );
}

const Header = props => {
    return (
        <header>
            <Title />
            <HeaderImage />
        </header>
    );
}

export default Header;