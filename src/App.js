import React from 'react';
import './App.scss';
import { pandemics } from './pandemics';
import ReactFullpage from '@fullpage/react-fullpage';


const validEvent = (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
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

    const scaleSize = (eventscale, threedee = true) => {

        let returnStyle = {};

        let pxScale = 20;
        let circleSize = (eventscale / pxScale) ** (1 / 2);

        if (threedee) {
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

const TimeLineItem = (props) => {
    return (
        <div class="section">
            <div className="TimeLineItem">
                <EventInfo event={props.event} />
                <EventCircle event={props.event} />
            </div>
        </div>
    )
}
const TimeLineItems = () =>
    <div className="TimeLineItems">
        {pandemics.filter(validEvent).map((event, index) =>
            <TimeLineItem key={index} event={event} />
        )}
    </div>;


const App = () => {
    const latestEvent = pandemics[pandemics.length - 1];
    return (
        <ReactFullpage
            className="TimeLine"
            licenseKey={"0822866D-6AE240B1-BFCD182C-DA43DAE6"}
            bigSectionsDestination="top"
            scrollingSpeed={1000}
            render={
                ({ state, fullpageApi }) => {
                    return(
                        <div>
                            
                            <ReactFullpage.Wrapper>
                                <TimeLineItems/>
                            </ReactFullpage.Wrapper>
                            <TimeLineItem event={latestEvent} />
                        </div>
                    )
                }
            }

        />
    );
}
export default App;