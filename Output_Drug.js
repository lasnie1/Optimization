import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'; //See https://react-bootstrap.github.io/components/progress/ for ProgressBar implementation.
import 'bootstrap/dist/css/bootstrap.min.css'; //See https://react-bootstrap.github.io/getting-started/introduction/ for guide to Bootstrap installation and importing. This is the inspiration for the ProgressBar instance below.

const OutputDrug = (props) => {
    return(
        <React.Fragment>
            <div>
                <label> {props.drug} </label> <ProgressBar now = {props.allocation} /*label = {`${props.allocation} %`}*//> <label> {props.allocation}%: {props.quantity} units</label>
            </div>    
        </React.Fragment>
    );
}
//See https://til.hashrocket.com/posts/dvqhfc5r0y-read-only-input-elements-with-react for readOnly implementation.

export default OutputDrug;