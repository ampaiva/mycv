import React from 'react';
import { Paragraph } from './Paragraph';



export function Paragraphs({ paragraphs }) {
    return (
        <div className="paragraphs">
            {paragraphs?.map((activity) => (
                <Paragraph paragraph={activity} />
            ))}
        </div>
    );
}
