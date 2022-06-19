import React from 'react';

const List = ({ content }) => {

    const events = content.map(item => {
        return (
            <li key={item.id}>{item.event}</li>
        )
    })

    return (
        <div>
            <ul>
                {events}
            </ul>
        </div>
    )
}

export default List;