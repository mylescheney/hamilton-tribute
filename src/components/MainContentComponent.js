import React from 'react';
import LifeSection from './LifeSectionComponent';
import LegacySection from './LegacySectionComponent';

const MainContent = props => {
    return (
        <main>
            <LifeSection heading={props.lifeContent.heading} image={props.lifeContent.image} lifeEvents={props.lifeContent.events} />
            <LegacySection heading={props.legacyContent.heading} image={props.legacyContent.image} legacyEvents={props.legacyContent.events} />
        </main>
    )
}

export default MainContent;