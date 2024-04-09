

import React, { useState, useRef } from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import Session from './session'

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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Calculate start and end index of items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const allItems = educations ?? [];

    // Get items for the current page
    const currentItems = allItems.slice(startIndex, endIndex);

    // Handler for next page click
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Handler for previous page click
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const contents = <div className="education">
        {currentItems.map((education) => (
            <Education education={education} />
        ))}
        <div className='pagination'>
            {currentPage > 1 && (
                <a href="#" className='prev' ref={prevRef} onClick={prevPage}><GrCaretPrevious />Previous</a>
            )}
            {endIndex < allItems.length && (
                <a href="#" className='next' ref={nextRef} onClick={nextPage}>Next<GrCaretNext /></a>
            )}
        </div>
    </div>;

    return (
        <Session icon={MdWork} text="Education" contents={contents} />
    );
}


export default Educations;
