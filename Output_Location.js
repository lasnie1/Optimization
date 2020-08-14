import React, {useState} from 'react';
import OutputDrug from './Output_Drug';
import 'bootstrap/dist/css/bootstrap.min.css'; ////See https://react-bootstrap.github.io/getting-started/introduction/ for guide to Bootstrap installation and import

const OutputLocation = (props) => {
    const [count, setCount] = useState(0);
    const [list, setList] = useState();
    
    const arrange = () => {
        let list1 = [];
    for (let i = 0; i < props.numDrugs; ++i) {
        list1.push(i);
    }
    let map1;
    map1 = list1.map((i, ind) => (<div key = {`k1${ind}`}><OutputDrug drug = {props.drugs[ind]} allocation = {Math.abs((parseFloat(props.allocation[ind])))} quantity = {Math.abs((2 * parseFloat(props.allocation[ind])))}/></div>))
    setList(map1);
    }
    if (count === 1) {
        arrange();
    }
    return(
        <div>
            <h2 style = {{color: "black"}}> {props.location} </h2> 
            <button onClick = {arrange}> Allocate drugs. </button>
            {list}
        </div>
    );
}

export default OutputLocation;