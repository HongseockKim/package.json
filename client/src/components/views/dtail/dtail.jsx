import React from 'react';

function Dtail({location}) {
    const getParams = location.state.detail;
    console.log(getParams)
    return (
        <>
            <div>
                {
                    getParams.map((text,idx) =>{
                        return <p key={idx}>{text.text}</p>
                    })
                }
            </div>
        </>
    );
}

export default Dtail;