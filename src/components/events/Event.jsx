import React from 'react';
import './Event.scss';

export const RenderMode = {
    threedee: "threedee"
}

export const EventCollection = ({ events, renderMode, side = "right", fullPageSection = true}) =>
    <div className="eventCollection">
        {events.map((event, index) =>

            <Event
                key={index}
                event={event}
                renderMode={renderMode}
                side={side}
                fullPageSection={fullPageSection}
            />

        )}
    </div>


export const Event = ({ event, renderMode, side="right", fullPageSection = true, active=false}) => {
    return (
        <div className={`Event ${side} ${fullPageSection ? "section" : ""} ${active ? "active" : ""} `}>
            <EventInfo event={event} active={active}/>
            <EventCircle event={event} renderMode={renderMode} side={side}/>
        </div>
    )
}

export const EventInfo = ({ event, active=false }) => {
    if(active){
        return (
            <div className="event-info active">
                <h1 className="currentDeaths">
                    {event.name}
                </h1>
                <h2>{event.deaths} deaths</h2>
                <p>Compared with other events</p>
            </div>
        )
    }else{
        return (
            <div className="event-info">
                <h1>{event.name}</h1>
                <p>{event.date}</p>
                <p>{event.location} - {event.disease}</p>
                <p>{event.deaths} deaths</p>
            </div>
        )
    }

}

export const EventCircle = ({event, renderMode, side="right"}) => {

    const scaleSize = (eventscale) => {

        let returnStyle = {};

        let pxScale = 500;
        let circleSize = (eventscale / pxScale) ** (1 / 2);

        if (renderMode === RenderMode.threedee) {
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

    if (event.maxDeaths) {
        return (
            <div className="circle-wrapper">
                <div className={`circle transparent ${side}`} style={scaleSize(event.maxDeaths)}>
                    <div className={`circle ${side}`} style={scaleSize(event.minDeaths)} />
                </div>
            </div>
        );
    }

    return <div className="circle-wrapper">
        <div className={`circle ${side}`} style={scaleSize(event.minDeaths)} />
    </div>;
}

