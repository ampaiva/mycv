import React from 'react';
import { Visible } from './Visible';
import { Text } from './Text';
import { functionMap } from './functionMap';



export function Paragraph({ className, paragraph, index }) {

    const renderText = (text, _className, index) => {
        return <Text className={_className ?? "text"} text={text} index={index}/>
    };

    const renderObject = (key, value, index) => {
        return functionMap[key] ?
            functionMap[key](value) :
            <Paragraph className={key} paragraph={value} index={index}/>;
    };

    const renderKeys = (paragraph, index) => {
        return paragraph && Object.keys(paragraph).map(
            (key) => renderObject(key, paragraph[key], index));
    };

    const renderList = (_className, array) => {
        const contents = <div className={_className}>
            <ul className='list' >
                {array.map((item, index) => (
                    <Paragraph paragraph={item} index={index} />
                ))}

            </ul>
        </div>;
        return contents;
    }

    const renderDiv = (_className, array) => {
        const contents = <div className={_className}>
            {array?.map((item) => (
                <Paragraph paragraph={item} />
            ))}
        </div>;
        return contents;
    }

    const renderArray = (_className, array) => {
        return _className === "activities" ?
            renderList(_className, array) :
            renderDiv(_className, array)
    }

    const renderContents = (_className, _paragraph, _index) => {
        return Array.isArray(_paragraph) ?
            renderArray(_className, _paragraph) :
            typeof _paragraph === 'string' ?
                renderText(_paragraph, _className, _index) :
                renderKeys(_paragraph, _index);
    }

    const contents = renderContents(className, paragraph, index);

    return (
        paragraph && <Visible tags={paragraph.tags} contents={contents} />
    );
}
