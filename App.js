import React, {useState} from 'react';
import Location from './Location';
import DrugType from './drugType';
import OutputLocation from './Output_Location';
import Title from './Kizuna-Logo-Color.png'; //See https://www.edwardbeazer.com/importing-images-with-react/ for image import
import 'bootstrap/dist/css/bootstrap.min.css'; //See https://react-bootstrap.github.io/getting-started/introduction/ for guide to Bootstrap installation and import

const App = () => {
  const [numLocations, setLocations] = useState(0);
  const [expgrprofit, setProfit] = useState(0);
  const [locHolder, setHolder] = useState();
  const [calculate, setCalculate] = useState(false);
  const [name, setName] = useState([]);
  const [locName, setLoc] = useState([]);
  const [drugNum, setNum] = useState([]);
  const [drugList, setList] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [drugName, setDrugName] = useState([]);
  const [drug, setDrug] = useState([]);
  const [credit, setCredit] = useState([]);
  const [outputBlock, setBlock] = useState();
  const [started, setStarted] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [drugDesc, setDesc] = useState([]);
  let locGroup;
  locGroup = locHolder;
  let tempName;
  tempName = name;
  let tempLoc;
  tempLoc = locName;
  let numList;
  numList = drugNum;
  let drugs;
  drugs = drugList;
  let tempPerc;
  tempPerc = percentage;
  let tempDrug;
  tempDrug = drugName;
  let drList;
  drList = drug;
  let credits;
  credits = credit;
  let listMap;
  let tempBlock = [];
  let tempDesc = [];
  //let count = 0;
  let loc_key = 0;
  let locList = [];

  const handleProfit = (event) => {
    setProfit(event.target.value);
  }
  const handleChange = (event) => {
    setLocations(event.target.value);
  }
  const handleName = (event) => {
    console.log("handleName");
    //console.log("handleName");
    //console.log("name");
    //console.log(name);
    for (let i = 0; i < parseFloat(numLocations); ++i) {
      if (event.target.id === `l${i}`) {
        tempName[i] = event.target.value;
      }
      setName(tempName);
      //console.log("value: " + event.target.value);
    }
  }

  const handleDrug = (event) => {
    console.log("handleDrug");
    for (let i = 0; i < parseFloat(numLocations); ++i) {
      if (event.target.id === `d${i}`) {
        numList[i] = event.target.value;
      }
    }
    setNum(numList);
  }

  const handleButton = () => {
    console.log("handleButton");
    //let loc_key = 0;
    if (started === false) {
      for (let i = 0; i < parseFloat(numLocations); ++i) {
        locList[i] = i;
        tempName[i] = "";
        tempLoc[i] = "";
        tempDrug[i] = [];
        numList[i] = 0;
        credits[i] = 0;
        drugs[i] = [];
        tempPerc[i] = [];
        tempDrug[i] = [];
        drList[i] = [];
        for (let j = 0; j < parseFloat(drugNum[i]); ++j) {
          tempPerc[i] = 0;
          tempDrug[i] = "";
          drList[i] = "";
        }
      }
      setStarted(true);
    } else {
      for (let i = 0; i < parseFloat(numLocations); ++i) {
        locList[i] = i;
      }
      if (parseFloat(numLocations) > tempName.length) {
        for (let i = tempName.length; i < parseFloat(numLocations); ++i) {
          tempName[i] = "";
          tempLoc[i] = "";
          numList[i] = 0;
          credits[i] = 0;
          drugs[i] = [];
          tempPerc[i] = [];
          tempDrug[i] = [];
          drList[i] = [];
          for (let j = 0; j < parseFloat(drugNum[i]); ++j) {
            tempPerc[i] = 0;
            tempDrug[i] = "";
            drList[i] = "";
          }
        }
      } else if (parseFloat(numLocations) < tempName.length) {
        //console.log("less than");
        for (let i = 0; i < parseFloat(numLocations); ++i) {
          tempName[i] = "";
          tempLoc[i] = "";
          numList[i] = 0;
          credits[i] = 0;
          drugs[i] = [];
          tempPerc[i] = [];
          tempDrug[i] = [];
          drList[i] = [];
          for (let j = 0; j < drugNum[i]; ++j) {
            tempPerc[i] = 0;
            tempDrug[i] = "";
            drList[i] = "";
          }
        }

      }
    }
    console.log("drugs");
    console.log(drugs);
    setPlaceList(locList);
    locGroup = locList.map((ind) => (<div key = {++loc_key}><Location key = {`key2${ind}`} id = {ind} location = {locName[ind]} 
      list = {drugList[ind]} reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum[ind]} 
      numFunc = {handleDrug} init = {initDrugs}/></div>));
    /*The website https://upmostly.com/tutorials/how-to-for-loop-in-react-with-examples 
    was helpful in using the map function. This function is used several times throughout 
    the Optimization app files.*/
    
    setHolder(locGroup);
    console.log("locList");
    console.log(locList);
  }

  const changeHandler = (event) => {
    console.log("changeHandler");
    //console.log("tempPerc");
    //console.log(tempPerc);
    for (let i = 0; i < numLocations; ++i) {
      for (let j = 0; j < parseFloat(drugNum[i]); ++j) {
        if (event.target.id === `p${i}-${j}`) {
          tempPerc[i][j] = event.target.value;
          for (let j = 0; j < parseFloat(drugNum[i]); ++j) {
            tempBlock[j] = <div key = {`key1${i}-${j}`}><DrugType key = {`key${i}-${j}`} id = {`${i}-${j}`} drug = {drug[i][j]} changeHandle = {changeHandle} drugName = {drugName[i][j]} changeOfName = {changeName} percentage = {percentage[i][j]} onChange = {changeHandler} credit = {credit[i][j]} onCredit = {handleCredit}/></div>;
          }
          //++count;
          drugs[i] = tempBlock;
          setPercentage(tempPerc);
          setList(drugs);
        }
      }
      /*for (let i = 0; i < numLocations; ++i) {
        for (let j = 0; j < drugNum[i]; ++j) {
          tempBlock[j] = <div key = {`key1${i}-${j}`}><DrugType key = {`key${i}-${j}`} id = {`${i}-${j}`} drug = {drug[i][j]} changeHandle = {changeHandle} drugName = {drugName[i][j]} changeOfName = {changeName} percentage = {percentage[i][j]} onChange = {changeHandler} credit = {credit[i][j]} onCredit = {handleCredit}/></div>;
        }
      }*/
    }
    locGroup = locList.map((ind) => (<div key = {++loc_key}><Location key = {`key2${ind}`} id = {ind} location = {locName[ind]} 
      list = {drugList[ind]} reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum[ind]} 
      numFunc = {handleDrug} init = {initDrugs}/></div>));
    setHolder(locGroup);
  }

  const changeHandle = (event) => {
    console.log("changeHandle");
    for (let i = 0; i < numLocations; ++i) {
      for (let j = 0; j < parseFloat(drugNum[i]); ++j) {
        if (event.target.id === `dr${i}-${j}`) {
          tempDrug[i][j] = event.target.value;
        }
      }
    }
    setDrugName(tempDrug);

    //setList(drugs);
    /*locGroup = locList.map((ind) => (<div key = {++loc_key}><Location key = {`key2${ind}`} id = {ind} location = {locName[ind]} 
      list = {drugList[ind]} reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum[ind]} 
      numFunc = {handleDrug} init = {initDrugs}/></div>));*/
  }

  const changeName = (event) => {
    console.log("changeName");
    for (let i = 0; i < numLocations; ++i) {
      for (let j = 0; j < drugNum[i]; ++j) {
        if (event.target.id === `drug${i}-${j}`) {
          console.log(event.target.id);
          drList[i][j] = tempDrug[i][j];
          for (let j = 0; j < parseFloat(drugNum[i]); ++j) {
            tempBlock[j] = <div key = {`key1${i}-${j}`}><DrugType key = {`key${i}-${j}`} id = {`${i}-${j}`} drug = {drug[i][j]} changeHandle = {changeHandle} drugName = {drugName[i][j]} changeOfName = {changeName} percentage = {percentage[i][j]} onChange = {changeHandler} credit = {credit[i][j]} onCredit = {handleCredit}/></div>;
          }
          //++count;
          drugs[i] = tempBlock;
        }
      }
    }
    setDrug(drList);
    setList(tempBlock);
    locGroup = locList.map((ind) => (<div key = {++loc_key}><Location key = {`key2${ind}`} id = {ind} location = {locName[ind]} 
      list = {drugList[ind]} reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum[ind]} 
      numFunc = {handleDrug} init = {initDrugs}/></div>));
    setHolder(locGroup);
  }
  /*const handleDemand = (event) => {
    setDemand(event.target.value);
  }*/
  const handleCredit = (event) => {
    console.log("handleCredit");
    for (let i = 0; i < parseFloat(numLocations); ++i) {
      if (event.target.id === `c${i}`) {
        credits[i] = event.target.value;
      }
    }
    setCredit(credits);
  }

  const initDrugs = (event) => {
    console.log("initDrugs");
    console.log("start");
    //for (let i = 0; i < drugList)
    /*for (let i = 0; i < drugDesc.length; ++i) {
      tempDesc[i] = drugDesc[i];
    }
    console.log("first tempDesc");
    console.log(tempDesc);
    */

    let count = 0;
    let key = 0;
    //drugs[i] = tempBlock;
    for (let i = 0; i < parseFloat(numLocations); ++i) {
      if (event.target.id === `b1_${i}`) {
        for (let k = 0; k < parseFloat(drugNum[i]); ++k) {
          tempPerc[i][k] = 0;
          console.log("id");
          console.log(`${i}-${k}`);
          tempBlock[i] = (<div key = {`divKey${i}-${k}`}><DrugType key = {`key${i}-${k}`} id = {`id${i}-${k}`} drug = {drug[i][k]} changeHandle = {changeHandle} drugName = {drugName[i][k]} changeOfName = {changeName} percentage = {percentage[i][k]} onChange = {changeHandler} credit = {credit[i]} onCredit = {handleCredit}/></div>);
          //tempDesc.push(`${i}-${k}`);
        }
        //++count;
        //let pos = 0
        //tempBlock[dj] = <div key = {`key1${i}-${j}`}><DrugType key = {`key${i}-${j}`} id = {`${i}-${j}`} drug = {drug[i][j]} changeHandle = {changeHandle} drugName = {drugName[i][j]} changeOfName = {changeName} percentage = {percentage[i][j]} onChange = {changeHandler} credit = {credit[i]} onCredit = {handleCredit}/></div>;
      
      //tempBlock = temp.map((ind) => (<div key = {`${ind}`}><DrugType key = {`key${ind}`} id = {ind} drug = {drug[ind]} changeHandle = {changeHandle} drugName = {drugName[ind]} changeOfName = {changeName} percentage = {percentage[ind][((++pos) % parseFloat(drugNum[ind]))-1]} onChange = {changeHandler} credit = {credit[ind]} onCredit = {handleCredit}/></div>));
      //See https://www.w3schools.com/js/js_arithmetic.asp and https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mod about modulus operator.
        drugs[i] = tempBlock;
        /*console.log("tempDesc");
        console.log(tempDesc);*/

      }
    }
    setList(drugs);
    //setDesc(tempDesc);
    locGroup = locList.map((ind) => (<div key = {++loc_key}><Location key = {`key2${ind}`} id = {ind} location = {locName[ind]} 
      list = {drugList[ind]} reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum[ind]} 
      numFunc = {handleDrug} init = {initDrugs}/></div>));
    setHolder(locGroup);
    
    console.log("end");
    /*let dList = [];
    //for (let i = 0; i < numLocations; ++i) {
    if (event.target.id === `b1_${0}`) {
      for (let j = 0; j < parseFloat(drugNum[0]); ++j) {
        dList.push(j);
      }*/
     // listMap = dList.map((i, ind) => (<DrugType key = {`k${ind}`} id = {ind} drug = {drug[ind]} changeHandle = {changeHandle} drugName = {drugName[ind]} changeOfName = {changeName} percentage = {percentage[ind]} onChange = {changeHandler} credit = {credit[ind]} onCredit = {handleCredit}/>));
      //This part of the code works. There is a drugList object containing DrugTypes.
      //drugs[i] = listMap;
    //}
    //setList(listMap);
    //}
    /*listMap = dList.map((i, ind) => (<DrugType key = {`k${ind}`} id = {ind} drug = {drug[ind]} changeHandle = {changeHandle} drugName = {drugName[ind]} changeOfName = {changeName} percentage = {percentage[ind]} onChange = {changeHandler} credit = {credit[ind]} onCredit = {handleCredit}/>));
    drugs[i] = listMap;*/
    //setLable(hi);
    /*locGroup = locList.map((i, ind) => (<div key = {++loc_key}><label key = {++loc_key} > <Location id = {ind} location = {locName[ind]} 
      list = {drugList} reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum[ind]} 
      numFunc = {handleDrug} init = {initDrugs}/> </label></div>));
    setHolder(locGroup);*/
  }

  const resetName = (event) => {
    console.log("start resetName");
    for (let i = 0; i < parseFloat(numLocations); ++i) {
      if (event.target.id === `b${i}`) {
        tempLoc[i] = name[i];
      }
    }
    setLoc(tempLoc);
    /*for (let j = 0; j < numLocations; ++j) {
      if (event.target.id === `b${j}`) {
        console.log(drugName[j]);
      }
    }
    */
    locGroup = locList.map((i, ind) => (<div key = {++loc_key}><label key = {++loc_key} > <Location id = {ind} location = {locName[ind]} 
      list = {drugList[i]} reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum[ind]} 
      numFunc = {handleDrug} init = {initDrugs}/> </label></div>));
    setHolder(locGroup);
  }

  console.log("drugDesc");
  console.log(drugDesc);
  /*//console.log("tempName");
  //console.log(tempName);
  setName(tempName);
  //console.log("last name");
  //console.log(name);
  //console.log("numLocations");
  //console.log(numLocations);
  //console.log("before: " + locName[0]);
  locGroup = locList.map((i, ind) => (<div key = {loc_key}><label key = {++loc_key} > <Location id = {`${ind}`} location = {locName[ind]} 
  reset = {resetName} name = {name[ind]} onChange = {handleName} num = {drugNum}
  numFunc = {handleDrug} init = {initDrugs}/> </label></div>));
  //listMap = dList.map((i, ind) => (<DrugType key = {`k${i}`} id = {i} drug = {drug[i]} changeHandle = {changeHandle} drugName = {drugName[i]} changeOfName = {changeName} percentage = {percentage[i]} onChange = {changeHandler} credit = {credit[i]} onCredit = {handleCredit}/>));
  //console.log("locGroup");
  //console.log(locGroup);
  setHolder(locGroup);
  setStarted(true);
  //let listMap;
  //console.log(started);
  //console.log("after-button name");
  //console.log(name);
  //console.log("after: " + locName[0]);
  //console.log("name: " + name[numLocations-1]);*/

  const optimization = () => {
    console.log("placeList");
    console.log(placeList);
    let tempBlock;
    if (calculate === false) {
      setCalculate(true);
    } else {
      setCalculate(false);
    }
    tempBlock = placeList.map((i, ind) => (<div key = {`k1${i}`}> <OutputLocation numLoc = {parseFloat(numLocations)} numDrugs = {parseFloat(drugNum[ind])} drugs = {drug[ind]} location = {locName[ind]} drug = {drug[ind]} allocation = {percentage[ind]}/></div>));
    setBlock(tempBlock);
  }

  if (calculate === false) {
    return (
      <div style = {{marginLeft: "0px"}}>
        <div id = "first"> 
          <img src = {Title}/>
        </div>
        <div id = "second"></div>
        <div style = {{marginLeft: "10px", marginBottom: "15px"}}>
          <div style = {{paddingTop: "15px"}}>
            <label> Input expected gross profit. </label> <input defaultValue = {expgrprofit} onChange = {handleProfit}/>
          </div>
          <div> 
            <label>Choose number of locations. </label> <input value = {numLocations} onChange = {handleChange}/>
            <button onClick = {handleButton}> Enter </button>
          </div>
          <div style = {{marginLeft: "20px", marginBottom: "40px"}}>
            {locHolder}
          </div>
          <button onClick = {optimization}> Next </button>
        </div>
      </div>
    );
  } else {
    return (
      <div style = {{marginLeft: "0px"}}>
        <div id = "first"> 
          <img src = {Title}/>
        </div>
        <div id = "second"></div>
        <div style = {{marginLeft: "10px", marginTop: "10px"}}>
          <div id = "third" style = {{width: 200, marginBottom: "30px"}}>
            {outputBlock}
          </div>
          <button onClick = {optimization}> Back </button>
        </div>
      </div>
    );
  }
}

export default App;
