import React from 'react';
import { Activities } from './Activities';


export const functionMap = {
    "activities": (activities) => (<Activities activities={activities} />),
    "tags": () => (<></>)
};
