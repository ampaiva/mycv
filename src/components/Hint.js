import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaQuestionCircle } from "react-icons/fa";
import { toHTML } from '../parser/experiences';

export function Hint({ hint }) {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
        console.log(position);
    };

    const mouseEnter = (event) => {
        setIsHovered(true);
    };

    const mouseLeave = () => {
        setIsHovered(false);
    };

    return (hint && (<>
        <div className="hint">
            <div onMouseMove={updatePosition}>
                <div className="icon" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><FaQuestionCircle /></div>
            </div>
        </div>
        {isHovered && ReactDOM.createPortal(<div className="box" style={{ top: position.y, left: position.x }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} dangerouslySetInnerHTML={{ __html: toHTML(hint) }} />, document.body)}
    </>
    ));
}
