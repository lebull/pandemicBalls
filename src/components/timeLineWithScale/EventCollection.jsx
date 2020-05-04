import React from 'react';
import { pandemics } from '../../pandemics';
import { Event } from './Event';


export const EventCollection = (props) =>
    <div className="TimeLineItems">
        {props.events.map((event, index) =>
            <Event key={index} event={event} renderMode={props.renderMode} />
        )}
    </div>;
