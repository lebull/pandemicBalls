import React from 'react';
import { Event, EventCollection } from '../events/Event';
import { pandemics } from '../../pandemics';
import './StackList.scss';
import { ModeContext } from '../../App';
import NovelCovid from 'novelcovid';

const validPandemic = (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 100000;
}

export class StackList extends React.Component {

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
        otherPandemics:pandemics.filter(validPandemic).reverse()
    };

    constructor(props){
        super(props);
        this.setState();
        this.fetchCoronavirus();
    }

    refreshCoronavirus(newTotal) {
        this.setState({
            coronavirus: {
                "deaths": `${newTotal} (As of ${new Date()})`,
                "minDeaths": newTotal,
                "maxDeaths": null,
                "location": "Worldwide",
                "date": "2019–present",
                "name": "2019–20 coronavirus pandemic",
                "disease": "COVID-19 / SARS-CoV-2"
            }
        });
    }

    fetchCoronavirus(){
        new NovelCovid().all().then((newTotal) => {
            this.refreshCoronavirus(newTotal.deaths)
        })
    }

    render(){
        return (
            
            <ModeContext.Consumer>
                {({mode}) => (
                    <div className="stackList">
                        <div className="left">
                            <Event event={this.state.coronavirus} renderMode={mode} />
                        </div>
                        <div className="right">
                            <EventCollection events={[...this.state.otherPandemics]} renderMode={mode} />
                        </div>
                    </div>
                )}
            </ModeContext.Consumer>
        );
    }
}