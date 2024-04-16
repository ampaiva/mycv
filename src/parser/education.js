

import React from 'react';
import { IoIosSchool } from "react-icons/io";
import Session from './session'
import Pagination from './pagination';
import Hint from '../components/Hint'
import { Roles } from '../components/Roles';
import { toHTML } from '../components/toHTML';

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


function Educations({ educations }) {
    const contents = <Pagination items={educations} itemsPerPage={3} itemRender={(item) => <Experience experience={item} />}/>; 

    return (
        <Session icon={IoIosSchool} text="Education" contents={contents} />
    );
}


export default Educations;
