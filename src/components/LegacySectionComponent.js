import React from 'react';
import List from './ListComponent';

const LegacySection = props => {
    return (
        <section id="legacy-section">
            <div id="legacy-div">
                <h3>{props.heading}</h3>
                <List content={props.legacyEvents} />
            </div>
            <img src={props.image} />
        </section>
    )
}

export default LegacySection;