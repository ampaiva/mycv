import React from 'react';
import { Visible } from '../components/Visible';
import { toHTML } from '../components/toHTML';



export function Text({ className, text }) {
    const contents = (
        <div className={className} dangerouslySetInnerHTML={{ __html: toHTML(text?.description ?? text) }} />
    );

    return (
        <Visible tags={text.tags} contents={contents} />
    );
}
