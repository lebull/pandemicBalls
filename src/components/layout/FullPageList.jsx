import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { EventCollection } from '../events/Event';
import { pandemics } from '../../pandemics';

const validPandemic= (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
}

export const FullPageList = () => {
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
                        <ReactFullpage.Wrapper>
                            <EventCollection events={pandemics.filter(validPandemic)} renderMode="threedee"/>
                        </ReactFullpage.Wrapper>
                    )
                }
            }

        />
    );
}