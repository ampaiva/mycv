
import React from 'react';
import { GiSkills } from "react-icons/gi";
import Pagination from './pagination';
import { useGlobalContext } from '../state/GlobalContext';
import Checkbox from '../components/Checkbox';

function Skill({ skill, index }) {
    const { globalContext, setGlobalContext } = useGlobalContext();
    const tag = skill[0].toLowerCase();
    const isGlobalSelected = globalContext["isGlobalSelected"];

    if ((isGlobalSelected !== undefined) &&
        (!globalContext["labelSelected"].hasOwnProperty(tag) || (globalContext["labelSelected"][tag] !== isGlobalSelected))) {
        const newGlobalContext = { ...globalContext };
        newGlobalContext["labelSelected"][tag] = isGlobalSelected;
        setGlobalContext(newGlobalContext);
    }

    const isSelected = isGlobalSelected === undefined ? globalContext["labelSelected"][tag] : isGlobalSelected;

    return (
        <div key={index}>
            <input type="checkbox" checked={isSelected} onChange={(e) => {
                const newGlobalContext = { ...globalContext };
                newGlobalContext["labelSelected"][tag] = e.target.checked;
                newGlobalContext["isGlobalSelected"] = undefined;
                setGlobalContext(newGlobalContext);
                console.log(newGlobalContext);
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
                <Checkbox />
                {<Pagination items={skills} itemsPerPage={30} itemRender={(item, index) => <Skill skill={item} index={index} />} />}
            </div>
        </div>
    );
    return (
        skills && (session)
    );
}


export default Skills;
