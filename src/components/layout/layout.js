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

export class Layout extends React.Component {

    state = {
        coronavirus: {
            "deaths": `null`,
            "minDeaths": 0,
            "maxDeaths": null,
            "location": "Worldwide",
            "date": "2019–present",
            "name": "2019–20 coronavirus pandemic",
            "disease": "COVID-19 / SARS-CoV-2"
        },
        otherPandemics: pandemics.filter(validPandemic).reverse()
    };

    constructor(props) {
        super(props);
        this.setState();
        this.fetchCoronavirus();
    }

    refreshCoronavirus(newTotal) {
        this.setState({
            coronavirus: {
                "deaths": `${newTotal} as of ${new Date()}`,
                "minDeaths": newTotal,
                "maxDeaths": null,
                "location": "Worldwide",
                "date": "2019–present",
                "name": "2019–20 coronavirus pandemic",
                "disease": "COVID-19 / SARS-CoV-2"
            }
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
                            <Event event={this.state.coronavirus} renderMode={mode} fullPageSection={false} side="left" />
                        </div>
                        <div className="right">
                            <ReactFullpage
                                className={"TimeLine"}
                                licenseKey={"0822866D-6AE240B1-BFCD182C-DA43DAE6"}
                                bigSectionsDestination={"top"}
                                scrollingSpeed={1000}
                                navigation={false}
                                recordHistory={false}
                                // anchors={anchors}
                                // navigationTooltips={navigationTooltips}
                                render={({ state, fullpageApi }) =>
                                    <ReactFullpage.Wrapper>
                                        <EventCollection events={this.state.otherPandemics} renderMode={mode} />
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