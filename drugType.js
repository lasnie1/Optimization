import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'; ////See https://react-bootstrap.github.io/getting-started/introduction/ for guide to Bootstrap installation and import


const DrugType = (props) => {
    console.log("props.id");
    console.log(props.id);
    return (
        <React.Fragment>
            <div id = "third">
                <label> Drug type </label> <input id = {`dr${props.id}`} onChange = {props.changeHandle} /*done*/ defaultValue = {props.drugName}/>
                <button id = {`drug${props.id}`} onClick = {props.changeOfName} /*done*/> Enter </button>
                <div style = {{paddingTop: "10px", paddingBottom: "10px"}}> <label> <strong> {props.drug} </strong> </label></div>
                <label> Importance of drug: </label>
                <div>
                    <Checkbox id = "High"/> <label> High </label>
                </div>
                <div>
                    <Checkbox id = "Medium"/> <label> Medium </label>
                </div>
                <div>
                    <Checkbox id = "Low"/> <label> Low </label> 
                </div>
            </div>
            <label> Profit margin </label> <input id = {`p${props.id}` /*done*/} type = "range" min = {-100} max = {100} defaultValue = {props.percentage} /*done*/ onChange = {props.onChange} /*done*//> <label /*done*/> {props.percentage} % </label>
            <div>
                <label> Credit </label> <input id = {`c${props.id}`} defaultValue = {props.credit} /*done*/ onChange = {props.onCredit} /*done*//>
            </div>
        </React.Fragment>
    );
}


export default DrugType;
