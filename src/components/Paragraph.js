import React from 'react';
import { Visible } from './Visible';
import { Text } from '../parser/Text';
import { functionMap } from './functionMap';



export function Paragraph({ className, paragraph }) {

    const renderText = (text, _className) => {
        return <Text className={_className ?? "text"} text={text} />
    };

    const renderObject = (key, value) => {
        return functionMap[key] ?
                functionMap[key](value) :
                <Paragraph className={key} paragraph={value} />;
    };

    const renderKeys = (paragraph) => {
        return paragraph && Object.keys(paragraph).map(
            (key) => renderObject(key, paragraph[key]));
    };

    const renderContents = (_className, paragraph) => {
        return Array.isArray(paragraph) ?
        <div className={_className}>
            {paragraph?.map((activity) => (
                <Paragraph paragraph={activity} />
            ))}
        </div> :  typeof paragraph === 'string' ?
        renderText(paragraph, _className) :
        renderKeys(paragraph, _className);
    }

    const contents = renderContents(className, paragraph);

    return (
        paragraph && <Visible tags={paragraph.tags} contents={contents} />
    );
}
