

import React from 'react';
import { IoIosSchool } from "react-icons/io";
import Session from './session'
import Pagination from './pagination';
import Hint from '../components/Hint'
import { Roles } from '../components/Roles';

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


function Experience({ experience }) {
    console.log(experience);
    return (
        <div className="experience">
            <Roles roles={experience?.roles} />
            <div className="company-period">
                <div className="column"><div className="company">{experience.company?.name}</div></div>
                {experience.start && <div className="column"><div className="period">{`${experience.start} - ${experience.end}`}</div></div>}
                <div className="column"><Hint hint={experience?.company?.hint} /></div>
            </div>
            <Activities activities={experience.activities} />
        </div>
    );
}

function Education({ education }) {

    return education.activities && (
        <div className="experience">
            <Roles roles={education?.degree} />
            <div className="company-period">
                <div className="column"><div className="school">{education.school}</div></div>
               {education.start && <div className="column"><div className="period">{`${education.start} - ${education.end}`}</div></div>}
            </div>
            <Activities activities={education.activities} />
        </div>
    );
}

function Educations({ educations }) {
    const contents = <Pagination items={educations} itemsPerPage={3} itemRender={(item) => <Experience experience={item} />}/>; 

    return (
        <Session icon={IoIosSchool} text="Education" contents={contents} />
    );
}


export default Educations;
