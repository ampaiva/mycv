import React from 'react';
import { Visible } from './Visible';
import { toHTML } from './toHTML';



export function Activity({ activity, index }) {
    const contents = (
        <li key={index} dangerouslySetInnerHTML={{ __html: toHTML(activity?.description ?? activity) }} />
    );

    return (
        <Visible tags={activity.tags} contents={contents} />
    );
}
