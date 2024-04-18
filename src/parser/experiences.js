

import React from 'react';
import { MdWork } from "react-icons/md";
import Session from './session'
import Pagination from './pagination';
import { Visible } from '../components/Visible'
import { toHTML } from '../components/toHTML';
import { Experience } from '../components/Experience';


function Activity({ activity, index }) {
    const contents = (
        <li key={index} dangerouslySetInnerHTML={{ __html: toHTML(activity?.description ?? activity) }} />
    );

    return (
        <Visible tags={activity.tags} contents={contents} />
    );
}

function Text({ className, text }) {
    const contents = (
        <div className={className} dangerouslySetInnerHTML={{ __html: toHTML(text?.description ?? text) }} />
    );

    return (
        <Visible tags={text.tags} contents={contents} />
    );
}

export function Activities({ activities }) {
    return (
        <div className="activities">
            <ul className="list">
                {activities?.map((activity, index) => (
                    <Activity activity={activity} index={index} />
                ))}
            </ul>
        </div>
    );
}

const functionMap = {
    "activities": (activities) => (<Activities activities={activities} />),
    "tags": () => (<></>)
}


function Paragraph({ paragraph }) {

    const generatedKey = Object.keys(paragraph)
        .map(
            (key) => functionMap[key] ?
                functionMap[key](paragraph[key]) :
                (<Text className={key} text={paragraph[key]} />)
        );
    console.log(generatedKey);
    const contents = (
        <>
            {generatedKey}
        </>
    );

    return (
        <Visible tags={paragraph.tags} contents={contents} />
    );
}


export function Paragraphs({ paragraphs }) {
    return (
        <div className="paragraphs">
            {paragraphs?.map((activity) => (
                <Paragraph paragraph={activity} />
            ))}
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
