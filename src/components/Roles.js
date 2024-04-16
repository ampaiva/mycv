import React from 'react';

export function Roles({ roles }) {
    return (roles &&
        <div className="roles">
            {roles.join(' | ')}
        </div>
    );
}
