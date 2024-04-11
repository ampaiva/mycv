

import { GiSkills } from "react-icons/gi";
import Pagination from './pagination';

function Skill({ skill }) {

    return (
        <div>{skill[0]}
            <div class="skill">
                <div class="skill-bar" style={{ width: skill[1].toString() + '%' }}></div>
            </div>
        </div>
    );
}
function Skills({ skills }) {
    const session = (
        <div class="section">
            <div class="title">
                <div class="column"><div class="icon"><GiSkills /></div></div>
                <div class="column"><div class="text">Skills</div></div>
                <div class="column"><div class="filler"></div></div>
            </div>
            <div class="contents">
                {<Pagination items={skills} itemsPerPage={30} itemRender={(item) => <Skill skill={item} />} />}
            </div>
        </div>
    );
    return (
        skills && (session)
    );
}


export default Skills;
