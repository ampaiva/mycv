import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import { SlClose } from "react-icons/sl";

import { toHTML } from './toHTML';

import './Hint.css';

export function HintIcon({ isVisible, setIsVisible }) {

    const toggle = () => {
        setIsVisible(prevState => !prevState);
    };

    const icon = isVisible ? <SlClose /> : <FaQuestionCircle />;

    return (
        <div className="hint">
            <div className="icon" onClick={toggle}>{icon}</div>
        </div>
    );
}


export function Hint({ hint, isVisible }) {
 
    return (hint && isVisible &&
        (<>
            <div className="box" dangerouslySetInnerHTML={{ __html: toHTML(hint) }} />
        </>
        ));
}

export default Hint;