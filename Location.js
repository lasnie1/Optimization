import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; ////See https://react-bootstrap.github.io/getting-started/introduction/ for guide to Bootstrap installation and import

const Location = (props) => {
    /*console.log("Location");
    console.log('props.location');
    console.log(props.location);
    console.log('props.list');
    console.log(props.list);
    console.log('props.num');
    console.log(props.num);*/
    return(
        <React.Fragment>
            <h2> {props.location} </h2>
            <label> Change location name. </label> <input id = {`l${props.id}`} defaultValue = {props.name} onChange = {props.onChange}/>
            <button id = {`b${props.id}`} onClick = {props.reset}> Reset </button> <label> Number of drugs </label> <input id = {`d${props.id}`} defaultValue = {props.num} onChange = {props.numFunc}/>
            <button id = {`b1_${props.id}`} onClick = {props.init}> Enter </button>
            {props.list}
        </React.Fragment>
    );
}

export default Location;

