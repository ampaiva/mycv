import React from 'react';
import { Visible } from './Visible';
import { toHTML } from './toHTML';



export function Text({ className, text, index }) {
    const html = toHTML(text?.description ?? text);
    const contents = (index !== undefined ? 
        <li key={index} dangerouslySetInnerHTML={{ __html: html }} /> : 
        <div className={className} visible="false" dangerouslySetInnerHTML={{ __html: html }}/>
    );

    return (
        <Visible tags={text.tags} contents={contents} />
    );
}
