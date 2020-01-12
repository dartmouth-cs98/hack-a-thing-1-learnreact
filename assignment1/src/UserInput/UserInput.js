import React from 'react';
import './UserInput.css';

const userinput = (props) => {
    return(
        <div className="UserInput">
            <p>I'm a User INPUT!!!</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default userinput;