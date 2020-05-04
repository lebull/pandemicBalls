import React from 'react';

export const Link = (props) => {
    return(
        <a class="Link" href={props.href}>{props.text}</a>
    )
}

export class LinkSet extends React.Component {

    constructor(props){
        super(props);
        this.open = false;
    }

    toggleOpen(){
        this.open = !this.open;
    }

    render(){
        return(
            <div className="LinkSet">
                { this.props.children }
            </div>
        );
    }
}