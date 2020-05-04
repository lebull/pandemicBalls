import React from 'react';
import './TopBar.scss';
import { LinkSet } from './Link';
import {ModeContext} from '../../../App';

export const TopBar = () => {
    return(
        <ModeContext.Consumer>
        {({toggleMode}) => (
            <div className="TopBar">
                <h1>Pandemic Balls</h1>
                <div className="spacer"/>
                <LinkSet>
                    <button onClick={toggleMode}>Toggle Mode</button>
                    {/* <Link href="/about" text="About"/> */}
                </LinkSet>
            </div>
        )}
        </ModeContext.Consumer>
    );
}

