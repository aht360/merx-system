import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{ overflowY: 'scroll', border: '1px solid black', height: 'fit-content', maxHeight: '200px', width: '500px', backgroundColor: 'white' }}>
                {props.children}
            </div>
        </div>
    );
};

export default Scroll;