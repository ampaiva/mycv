

import React from 'react';
import { IoIosSchool } from "react-icons/io";
import Session from './session'
import Pagination from './pagination';
import { Experience } from '../components/Experience';

function Educations({ educations }) {
    const contents = <Pagination items={educations} itemsPerPage={3} itemRender={(item) => <Experience experience={item} />}/>; 

    return (
        <Session icon={IoIosSchool} text="Education" contents={contents} items={educations}/>
    );
}


export default Educations;
