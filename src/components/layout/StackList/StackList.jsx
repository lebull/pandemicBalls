import React from 'react';
import { EventCollection } from '../../events/Event';
import { pandemics } from '../../../pandemics';
import './StackList.scss';
import {ModeContext} from '../../../App';

const validPandemic = (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
}

export const StackList = () => {
    return (
        <div className="stackList">
            <ModeContext.Consumer>
                {({mode}) => (
                    <EventCollection events={pandemics.filter(validPandemic).reverse()} renderMode={mode} />
                )}
            </ModeContext.Consumer>
        </div>
    );
}