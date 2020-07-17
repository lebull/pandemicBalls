import React from 'react';
import './Event.scss';

export const RenderMode = {
    threedee: "threedee"
}

export const EventCollection = ({events, renderMode}) =>
    <div>
        {events.map((event, index) =>
            <Event key={index} event={event} renderMode={renderMode} />
        )}
    </div>;

export const Event = ({event, renderMode}) => {
    return (
        <div className="section">
            <div className="Event">
                <EventInfo event={event} />
                <EventCircle event={event} renderMode={renderMode}/>
            </div>
        </div>
    )
}

export const EventInfo = ({event}) => {
    return (
        <div className="Info">
            <h1>{event.name}</h1>
            <p>{event.date}</p>
            <p>{event.location} - {event.disease}</p>
            <p>{event.deaths} deaths</p>
        </div>
    )
}

const EventCircle = (props) => {

    const scaleSize = (eventscale) => {

        let returnStyle = {};

        let pxScale = 500;
        let circleSize = (eventscale / pxScale) ** (1 / 2);

        if (props.renderMode === RenderMode.threedee) {
            pxScale = 5;
            circleSize = (Math.round(eventscale / pxScale)) ** (1 / 3);
            returnStyle.boxShadow = `inset -${circleSize / 4}px -${circleSize / 4}px ${circleSize / 3}px rgba(0,0,0,0.8)`;
        }

        let circleSizeCss = `${circleSize}px`;
        return {
            ...returnStyle,
            width: circleSizeCss,
            height: circleSizeCss,
        }
    }

    if(props.event.maxDeaths){
        return (
            <div className="Circle transparent" style={scaleSize(props.event.maxDeaths)}>
                <div className="Circle" style={scaleSize(props.event.minDeaths)} />
            </div>
        );
    }

    return <div className="Circle" style={scaleSize(props.event.minDeaths)} />;
}

