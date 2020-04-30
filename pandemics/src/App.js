import React from 'react';
import './App.scss';
import { pandemics } from './pandemics';



const validEvent = (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
}

const EventInfo = (props) => {
    return(
        <div class="Info">
            <h1>{props.event.name} ({props.event.date})</h1>
            <p>{props.event.location} - {props.event.disease}</p>
            <p>{props.event.deaths} deaths</p>
        </div>
    )
}

const EventCircle = (props) => {

    const scaleSize = (event) => {
        const pxScale = 40;
        let circleSize = (event.minDeaths/pxScale)**(1/2);
        let circleSizeCss = `${circleSize}px`;
        return {
            width : circleSizeCss,
            height : circleSizeCss,
            boxShadow : `inset -${circleSize/4}px -${circleSize/4}px ${circleSize/2}px rgba(0,0,0,0.8)`
        }
    }

    return (<div class="Circle" style={scaleSize(props.event)}/>);

}

const TimeLineItem = (props) => {
    return (
        <div className="TimeLineItem">
            <EventInfo event={props.event}/>
            <EventCircle event={props.event}/>
        </div>
    )
}
const TimeLineItems = () =>
    <div className="TimeLineItems">
        {pandemics.filter(validEvent).map((event) =>
            <TimeLineItem event={event} />
        )}
    </div>;


const App = () => {
    const latestEvent = pandemics[pandemics.length - 1];
    return(
        <div className="TimeLine">
            <div className="leftPane">
                <TimeLineItem event={latestEvent} />
            </div>
            <div className="rightPane">
                <TimeLineItems/>
            </div>
        </div>
    );
}
export default App;