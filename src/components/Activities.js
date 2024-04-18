import React from 'react';
import { Activity } from './Activity';


export function Activities({ activities }) {
    return (
        <div className="activities">
            <ul className="list">
                {activities?.map((activity, index) => (
                    <Activity activity={activity} index={index} />
                ))}
            </ul>
        </div>
    );
}
