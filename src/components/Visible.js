
import React from 'react';
import { useGlobalContext } from '../state/GlobalContext';

export function IsVisible(tags) {
    const { globalContext } = useGlobalContext();

    return tags ? tags.some(tag => globalContext["labelSelected"][tag.toLowerCase()]) : true;
}

export function Visible({ tags, contents }) {
    const visible = IsVisible(tags);

    return <div>{visible && contents}</div>;
}

export default Visible;

