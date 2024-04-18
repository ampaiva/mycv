import React, { useState } from 'react';
import { Hint, HintIcon } from './Hint';
import { Roles } from './Roles';
import { Activities } from './Activities';
import { Paragraphs } from './Paragraphs';

export function Experience({ experience }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="experience">
            <Roles roles={experience.roles} />
            <div className="company-period">
                <div className="column"><div className="company">{experience.company.name}</div></div>
                <div className="column"><div className="period">{experience.start && `${experience.start} - ${experience.end}`}</div></div>
                <div className="column"><HintIcon isVisible={isVisible} setIsVisible={setIsVisible} /></div>
            </div>
            <Hint hint={experience.company.hint} isVisible={isVisible} />
            <Paragraphs paragraphs={experience.paragraphs} />
            <Activities activities={experience.activities} />
        </div>
    );
}
