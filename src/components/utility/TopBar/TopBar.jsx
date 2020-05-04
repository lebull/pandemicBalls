import React from 'react';
import './TopBar.scss';
import { Link } from './Link';
export const TopBar = () => {
    return(
        <div className="TopBar">
            <h1>Pandemic Balls</h1>
            <div className="spacer"/>
            <Link href="/about" text="About"/>
        </div>
    );
}