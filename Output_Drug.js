import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'; //See https://react-bootstrap.github.io/components/progress/ for ProgressBar implementation.
import 'bootstrap/dist/css/bootstrap.min.css'; //See https://react-bootstrap.github.io/getting-started/introduction/ for guide to Bootstrap installation and import

const OutputDrug = (props) => {
    return(
        <React.Fragment>
        <label> {props.drug} </label> <ProgressBar now = {props.allocation} label = {`${props.allocation} %`}/><label> {props.quantity} units</label>
        </React.Fragment>
    );
}
//See https://til.hashrocket.com/posts/dvqhfc5r0y-read-only-input-elements-with-react for readOnly implementation.

export default OutputDrug;