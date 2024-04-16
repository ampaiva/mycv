
import React from 'react';
import { useGlobalContext } from '../state/GlobalContext';
import { toHTML } from '../components/toHTML';

export function Visible({ activity, index }) {
    const { globalContext } = useGlobalContext();

    const visible = activity?.tags ? activity?.tags.some(tag => globalContext["labelSelected"][tag.toLowerCase()]) : true;

    return <div>{visible &&
        (
            <li key={index} dangerouslySetInnerHTML={{ __html: toHTML(activity?.description ?? activity) }} />
        )}
    </div>;
}

export default Visible;