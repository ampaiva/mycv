import React from 'react';
import { Paragraph } from './Paragraph';



export function Paragraphs({ paragraphs, className }) {
    return (<Paragraph className={className} paragraph={paragraphs} />);
}

export default Paragraphs;
