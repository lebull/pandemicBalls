import React from 'react';
import './Event.scss';

export const RenderMode = {
    threedee: "threedee"
}

export const EventCollection = (props) =>
    <div>
        {props.events.map((event, index) =>
            <Event key={index} event={event} renderMode={props.renderMode} />
        )}
    </div>;

const Event = (props) => {
    return (
        <div className="section">
            <div className="Event">
                <EventInfo event={props.event} />
                <EventCircle event={props.event} renderMode={props.renderMode}/>
            </div>
        </div>
    )
}

const EventInfo = (props) => {
    return (
        <div className="Info">
            <h1>{props.event.name}</h1>
            <p>{props.event.date}</p>
            <p>{props.event.location} - {props.event.disease}</p>
            <p>{props.event.deaths} deaths</p>
        </div>
    )
}

const EventCircle = (props) => {

    const scaleSize = (eventscale) => {

        let returnStyle = {};

        let pxScale = 500;
        let circleSize = (eventscale / pxScale) ** (1 / 2);

        if (props.renderMode === RenderMode.threedee) {
            pxScale = 1.4;
            circleSize = (Math.round(eventscale / pxScale)) ** (1 / 3);
            returnStyle.boxShadow = `inset -${circleSize / 4}px -${circleSize / 4}px ${circleSize / 3}px rgba(0,0,0,0.8)`;
            returnStyle.border = "none";
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

