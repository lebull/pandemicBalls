import React from 'react';
import './App.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { EventCollection } from './components/events/Event';
import { pandemics } from './pandemics';

const validPandemic= (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
}

const App = () => {
    return (
        <ReactFullpage
            className={"TimeLine"}
            licenseKey={"0822866D-6AE240B1-BFCD182C-DA43DAE6"}
            bigSectionsDestination={"top"}
            scrollingSpeed={1000}
            navigation={false}
            // navigationTooltips={navigationTooltips}
            recordHistory={false}
            // anchors={anchors}
            render={
                ({ state, fullpageApi }) => {
                    return(
                        <div data-testid="timeline">
                            <ReactFullpage.Wrapper>
                                <EventCollection events={pandemics.filter(validPandemic)} renderMode="threedee"/>
                            </ReactFullpage.Wrapper>
                        </div>
                    )
                }
            }

        />
    );
}
export default App;