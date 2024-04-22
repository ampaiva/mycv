

import React from 'react';
import { MdWork } from "react-icons/md";
import Session from './session'
import Pagination from './pagination';
import { Experience } from '../components/Experience';


function Experiences({ experiences }) {
    const contents = <Pagination items={experiences} itemsPerPage={3} itemRender={(experience) => <Experience experience={experience} />} />;

    return (
        <Session icon={MdWork} text="Experience" contents={contents} items={experiences}/>
    );
}


export default Experiences;
