import React from 'react';
import './TopBar.scss';
import { LinkSet } from './Link';
import {ModeContext} from '../../../App';

export const TopBar = () => {
    return(
        <ModeContext.Consumer>
        {({mode, toggleMode}) => (
            <div className="TopBar">
                <h1>Pandemic Balls</h1>
                <div className="spacer"/>
                <LinkSet>
                    {/* <button className="button" onClick={toggleMode}>{mode === "threedee" ? "View in 2D" : "View in 3D"}</button> */}
                    {/* <Link href="/about" text="About"/> */}
                </LinkSet>
            </div>
        )}
        </ModeContext.Consumer>
    );
}

