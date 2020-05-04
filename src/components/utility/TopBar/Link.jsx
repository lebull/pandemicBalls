import React from 'react';

export const Link = (props) => {
    return(
        <a class="Link" href={props.href}>{props.text}</a>
    )
}