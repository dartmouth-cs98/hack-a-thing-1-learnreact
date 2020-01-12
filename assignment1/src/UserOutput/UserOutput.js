import React from 'react';

const useroutput = (props) => {
    return(
        <div>
            <p onClick={props.click}>I'm a User OUTPUT!!! and my name is {props.name}</p>
        </div>
    );
}

export default useroutput;