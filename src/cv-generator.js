

import React, { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";

const toHTML = (text) => {
    // Regular expression to match Markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Replace Markdown links with HTML links
    const htmlText = text.replace(linkRegex, '<a href="$2" target="_blank">$1</a>');

    return htmlText;
}


function Activities({ activities }) {
    return (
        <div className="activities">
            <ul className="list">
                {activities.map((activity) => (
                    <li dangerouslySetInnerHTML={{ __html: toHTML(activity) }} />
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

function ExperienceList({ experiences }) {
    return (
        <div className="experiences">
            {experiences.map((experience) => (
                <Experience experience={experience} />
            ))}
        </div>
    );
}
function DictToHTML({ jsonString }) {

    let data = null;
    let error = null;
    try {
        data = JSON.parse(jsonString);
    } catch (e) {
        error = e;
    }
    return (
        <div>
            {data && (
                <ExperienceList experiences={data.experiences} />
            )}
            {error && (
                <div>
                    <p>Error parsing JSON: {error.message}</p>
                    <p>jsonString</p>
                </div>
            )}
        </div>
    );
};

export default DictToHTML;
