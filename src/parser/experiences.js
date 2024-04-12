

import React, { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Session from './session'
import Pagination from './pagination';
import { useLabels } from '../state/LabelsContext';

const toHTML = (text) => {
    // Regular expression to match Markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Replace Markdown links with HTML links
    const htmlText = text.replace(linkRegex, '<a href="$2" target="_blank">$1</a>');

    return htmlText;
}

function Visible({ activity, index }) {
    const { labelStates } = useLabels();

    const visible = activity?.tags ? activity?.tags.some(tag => labelStates[tag.toLowerCase()]) : true;

    return <div>{visible && (<li key={index} dangerouslySetInnerHTML={{ __html: toHTML(activity?.description ?? activity) }} />)}</div>;
}

function Activity({ activity, index }) {
    return (
        <Visible activity={activity} index={index} />
    );
}


function Activities({ activities }) {
    return (
            <div className="activities">
                <ul className="list">
                    {activities.map((activity, index) => (
                        <Activity activity={activity} index={index} />
                    ))}
                </ul>
            </div>
    );
}

function Roles({ roles }) {
    return (
        <div className="roles">
            {roles.join(' | ')}
        </div>
    );
}

function Experience({ experience }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="experience">
            <Roles roles={experience.roles} />
            <div className="container">
                {isHovered && <div className="box" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} dangerouslySetInnerHTML={{ __html: toHTML(experience.company.description) }} />}
            </div>
            <div className="company-period">
                <div class="column"><div className="company">{experience.company.name}</div></div>
                <div class="column"><div className="period">{`${experience.start} - ${experience.end}`}</div></div>
                <div class="column"><div class="icon" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><FaQuestionCircle /></div></div>
            </div>
            <Activities activities={experience.activities} />
        </div>
    );
}

function Experiences({ experiences }) {
    const contents = <Pagination items={experiences} itemsPerPage={3} itemRender={(experience) => <Experience experience={experience} />} />;

    return (
        <Session icon={MdWork} text="Experience" contents={contents} />
    );
}


export default Experiences;
