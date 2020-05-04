import React from 'react';
import { EventCollection } from '../../events/Event';
import { pandemics } from '../../../pandemics';
import './StackList.scss';

const validPandemic = (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
}

export const StackList = () => {
    return (
        <div className="stackList">
            <EventCollection events={pandemics.filter(validPandemic)} renderMode="threedee" />
        </div>
    );
}