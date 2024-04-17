

import React, {useState} from 'react';
import { MdWork } from "react-icons/md";
import Session from './session'
import Pagination from './pagination';
import { Hint, HintIcon } from '../components/Hint';
import { Roles } from '../components/Roles';
import { Visible } from '../components/Visible'
import { toHTML } from '../components/toHTML';


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

function Activities({ activities }) {
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


function Paragraphs({ paragraphs }) {
    return (
        <div className="paragraphs">
            {paragraphs?.map((activity) => (
                <Paragraph paragraph={activity} />
            ))}
        </div>
    );
}

function Experience({ experience }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="experience">
            <Roles roles={experience.roles} />
            <div className="company-period">
                <div className="column"><div className="company">{experience.company.name}</div></div>
                <div className="column"><div className="period">{`${experience.start} - ${experience.end}`}</div></div>
                <div className="column"><HintIcon  isVisible={isVisible} setIsVisible={setIsVisible}/></div>
            </div>
            <Hint hint={experience.company.hint} isVisible={isVisible}/>
            <Paragraphs paragraphs={experience.paragraphs} />
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
