import React from 'react';

const DarkModeToggle = (props) => {
    return (
        <>
            <button onClick={props.onToggleDarkMode}>{props.initialMode ? 'Light Mode' : 'Dark Mode'}</button>
        </>
    );
};

export default DarkModeToggle;
