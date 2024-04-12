
import React from 'react';
import { GiSkills } from "react-icons/gi";
import Pagination from './pagination';
import { useLabels } from '../state/LabelsContext';

function Skill({ skill, index }) {
    const { labelStates, setLabelStates } = useLabels();
    const tag = skill[0].toLowerCase();
    if (!labelStates.hasOwnProperty(tag)) {
        labelStates[tag] = true;
        const newLabelStates = { ...labelStates };
        setLabelStates(newLabelStates);
    }
    
    const isSelected = labelStates[tag];

    return (
        <div key={index}>
            <input type="checkbox" checked={isSelected} onChange={(e) => {
                const newLabelStates = { ...labelStates };
                newLabelStates[tag] = e.target.checked;
                setLabelStates(newLabelStates);
            }} />
            <label>{skill[0]}</label>
            <div className={isSelected ? 'skill selected' : 'skill unselected'}>
                <div className="skill-bar" style={{ width: skill[1].toString() + '%' }}></div>
            </div>
        </div>
    );
}


function Skills({ skills }) {
    const session = (
        <div className="section">
            <div className="title">
                <div className="column"><div className="icon"><GiSkills /></div></div>
                <div className="column"><div className="text">Skills</div></div>
                <div classNLabelsProviderame="column"><div className="filler"></div></div>
            </div>
            <div className="contents">
                {<Pagination items={skills} itemsPerPage={30} itemRender={(item, index) => <Skill skill={item} index={index} />} />}
            </div>
        </div>
    );
    return (
        skills && (session)
    );
}


export default Skills;
