import React from 'react';
import List from './ListComponent';

const LifeSection = props => {
    return (
        <section id="life-section">
            <div id="life-div">
                <h3>{props.heading}</h3>
                <List content={props.lifeEvents} />
            </div>
            <img src={props.image} />
        </section>
    )
}

export default LifeSection;