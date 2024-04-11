

import React, { useState } from 'react';
import { MdWork } from "react-icons/md";
import Session from './session'
import Pagination from './pagination';

const toHTML = (text) => {
    // Regular expression to match Markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Replace Markdown links with HTML links
    const htmlText = text.replace(linkRegex, '<a href="$2" target="_blank">$1</a>');

    return htmlText;
}

function Roles({ roles }) {
    return (
        <div className="roles">
            {roles?.join(' | ')}
        </div>
    );
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


function Education({ education }) {
    const [isHovered, setIsHovered] = useState(false);

    return education.activities && (
        <div className="education">
            <Roles roles={education?.degree} />
            <div className="school-period">
                <div class="column"><div className="school">{education.school}</div></div>
               {education.start && <div class="column"><div className="period">{`${education.start} - ${education.end}`}</div></div>}
            </div>
            <Activities activities={education.activities} />
        </div>
    );
}

function Educations({ educations }) {
    const contents = <Pagination items={educations} itemsPerPage={3} itemRender={(item) => <Education education={item} />}/>; 

    return (
        <Session icon={MdWork} text="Education" contents={contents} />
    );
}


export default Educations;
