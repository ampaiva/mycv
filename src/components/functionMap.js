import React from 'react';
import Objective from '../parser/objective';
import Skills from '../parser/Skills';
import Experiences from '../parser/experiences';
import Educations from '../parser/education';
import { Activities } from './Activities';


export const functionMap = {
    "objective": (objective) => (<Objective objective={objective} />),
    "skills": (skills) => <Skills skills={skills} />,
    "experiences": (experiences) => <Experiences experiences={experiences} />,
    "education": (education) => <Educations educations={education} />,
    "activities": (activities) => (<Activities activities={activities} />),
    "tags": () => (<></>)
};
