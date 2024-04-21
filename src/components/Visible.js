
import React from 'react';
import { useGlobalContext } from '../state/GlobalContext';

export function Visible({ tags, contents }) {
    const { globalContext } = useGlobalContext();

    const visible = tags ? tags.some(tag => globalContext["labelSelected"][tag.toLowerCase()]) : true;
    console.log("Visible? ", visible, tags)
    return <div>{visible && contents}</div>;
}

export default Visible;