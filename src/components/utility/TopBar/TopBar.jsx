import React from 'react';
import './TopBar.scss';
import { Link, LinkSet } from './Link';
export const TopBar = () => {
    return(
        <div className="TopBar">
            <h1>Pandemic Balls</h1>
            <div className="spacer"/>
            <LinkSet>
                <Link href="/about" text="About"/>
            </LinkSet>
        </div>
    );
}