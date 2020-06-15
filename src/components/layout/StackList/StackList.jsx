import React from 'react';
import { EventCollection } from '../../events/Event';
import { pandemics } from '../../../pandemics';
import './StackList.scss';
import {ModeContext} from '../../../App';
import NovelCovid from 'novelcovid';

const validPandemic = (event) => {
    return event.name && event.deaths && event.minDeaths && event.minDeaths > 10000;
}

export class StackList extends React.Component {

    state = {
        coronavirus: {
            "deaths": `null`,
            "minDeaths": 0,
            "maxDeaths": null,
            "location": "Worldwide",
            "date": "2019–present",
            "name": "COVID-19 Pandemic",
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
                "date": "2019-...",
                "name": "COVID-19 Pandemic",
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
            <div className="stackList">
                <ModeContext.Consumer>
                    {({mode}) => (
                        <EventCollection events={[this.state.coronavirus, ...this.state.otherPandemics]} renderMode={mode} />
                    )}
                </ModeContext.Consumer>
            </div>
        );
    }
}