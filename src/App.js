import React from 'react';
import './App.scss';
// import { TopBar } from './components/utility/TopBar/TopBar';
import { Layout } from './components/layout/layout';

export const ModeContext = React.createContext({
    mode: "threedee", 
    toggleMode: () => {}
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            mode: "threedee",
            toggleMode: () => this.setState(state => ({
                mode: state.mode === "threedee" ? "twodee" : "threedee"
            }))
        });

    }
    render(){
        return (
            <div data-testid="timeline">
                <ModeContext.Provider value={this.state}>
                    {/* <TopBar /> */}
                    <Layout />
                </ModeContext.Provider>
            </div>
        );
    }
}
export default App;