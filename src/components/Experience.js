import React, { useState } from 'react';
import { Hint, HintIcon } from './Hint';
import { Roles } from './Roles';
import { Paragraphs } from './Paragraphs';
import { Visible } from './Visible';

export function Experience({ experience }) {
    const [isVisible, setIsVisible] = useState(false);
    const contents = <div className="experience">
        <Roles roles={experience.roles} />
        <div className="company-period">
            <div className="column"><div className="company">{experience.company.name}</div></div>
            <div className="column"><div className="period">{experience.start && `${experience.start} - ${experience.end}`}</div></div>
            <div className="column"><HintIcon isVisible={isVisible} setIsVisible={setIsVisible} /></div>
        </div>
        <Hint hint={experience.company.hint} isVisible={isVisible} />
        <Paragraphs paragraphs={experience.paragraphs} className={"paragraphs"} />
    </div>

    return (
        <Visible tags={experience.tags} contents={contents} />
    );
}
