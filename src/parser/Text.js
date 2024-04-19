import React from 'react';
import { Visible } from '../components/Visible';
import { toHTML } from '../components/toHTML';



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
