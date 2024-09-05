import React from 'react';
import './App';

const Badge = ({label, type }) => {
    return (
       <>
        <span className={`badge badge-${type}`}>
         {label}
        </span>
       </>
    )
}

export default Badge;