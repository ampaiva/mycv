

import React from 'react';
import { MdWork } from "react-icons/md";
import Session from './session'
import Pagination from './pagination';
import { Hint } from '../components/Hint';
import { Roles } from '../components/Roles';
import { Visible } from '../components/Visible'


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

function Experience({ experience }) {

    return (
        <div className="experience">
            <Roles roles={experience.roles} />
            <div className="company-period">
                <div className="column"><div className="company">{experience.company.name}</div></div>
                <div className="column"><div className="period">{`${experience.start} - ${experience.end}`}</div></div>
                <div className="column"><Hint hint={experience.company.hint} /></div>
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
