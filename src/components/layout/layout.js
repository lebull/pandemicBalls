import React from 'react';
import { EventCollection, Event } from '../events/Event';
import { pandemics } from '../../pandemics';
import './layout.scss';
import { ModeContext } from '../../App';
import NovelCovid from 'novelcovid';
import ReactFullpage from '@fullpage/react-fullpage';

const validPandemic = (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
}

const coronavirus = {
    "deaths": `null`,
    "minDeaths": 0,
    "maxDeaths": null,
    "location": "Worldwide",
    "date": "2019–present",
    "name": "Current Coronavirus Pandemic",
    "disease": "COVID-19 / SARS-CoV-2",
};

export class Layout extends React.Component {

    state = {
        coronavirus: coronavirus,
        pandemics: [coronavirus, ...pandemics.filter(validPandemic).reverse()]
    };

    constructor(props) {
        super(props);
        this.setState();
        this.fetchCoronavirus();
    }

    refreshCoronavirus(newTotal) {
        let updatedCoronaVirus = {
            ...coronavirus,
            "deaths": `${newTotal}`,
            "minDeaths": newTotal,
            "maxDeaths": newTotal,
        };
        this.setState({
            coronavirus: updatedCoronaVirus,
            pandemics: [updatedCoronaVirus, ...pandemics.filter(validPandemic).reverse()]
        });
    }

    fetchCoronavirus() {
        new NovelCovid().all().then((newTotal) => {
            this.refreshCoronavirus(newTotal.deaths)
        })
    }

    render() {
        return (
            <ModeContext.Consumer>
                {({ mode }) => (
                    <div className="stackList">
                        <div className="left">
                            <Event
                                event={this.state.coronavirus}
                                renderMode={mode}
                                fullPageSection={false}
                                side="left"
                                active={true}
                            />
                        </div>
                        <div className="right">
                            <ReactFullpage
                                className={"TimeLine"}
                                licenseKey={"0822866D-6AE240B1-BFCD182C-DA43DAE6"}
                                bigSectionsDestination={"top"}
                                scrollingSpeed={400}
                                navigation={false}
                                recordHistory={false}
                                // anchors={anchors}
                                // navigationTooltips={navigationTooltips}
                                verticalCentered={false}
                                render={({ state, fullpageApi }) =>
                                    <ReactFullpage.Wrapper>
                                        <EventCollection events={this.state.pandemics} renderMode={mode} />
                                    </ReactFullpage.Wrapper>
                                }
                            />
                        </div>
                    </div>
                )}
            </ModeContext.Consumer>
        );
    }
}