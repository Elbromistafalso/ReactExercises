import img from './logo192.png';
import React from 'react';


let Paveiksliukas = () => {

    let [classN, setState] = React.useState("");

    function Spin (event) {

        event.preventDefault();
        
        if(classN === ""){
    
            setState("App-logo");
        }
    }

    function StopSpin (event) {

        event.preventDefault();
        
        if(classN === "App-logo"){
    
            setState("");
        }
    }
    
return (<img  src={img} alt="paveikslelis" className= {classN}  onMouseEnter={Spin} onMouseLeave={StopSpin}  style={{height : 70}} ></img>)

}

export default Paveiksliukas;