import React from 'react';
import { Visible } from './Visible';
import { Text } from '../parser/Text';
import { functionMap } from './functionMap';



export function Paragraph({ paragraph }) {

    const generatedKey = Object.keys(paragraph)
        .map(
            (key) => functionMap[key] ?
                functionMap[key](paragraph[key]) :
                (<Text className={key} text={paragraph[key]} />)
        );
    console.log(generatedKey);
    const contents = (
        <>
            {generatedKey}
        </>
    );

    return (
        <Visible tags={paragraph.tags} contents={contents} />
    );
}
