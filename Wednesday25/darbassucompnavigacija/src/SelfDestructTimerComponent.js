import React, { Component } from 'react';


let p = document.getElementById("p");
let intervalBackground;
let intervalCounter;

class SelfDestructTimerComponent extends Component{

    constructor(){ 
        super(); 
        this.state = {counter: 42}
        this.countDown = this.countDown.bind(this);
        this.launchTimer = this.launchTimer.bind(this);  
    }

    setCoutDownInterval(){

        intervalCounter = setInterval(this.countDown, 1000);   
    }

    launchTimer(){

        intervalBackground = setInterval(this.changeBackgroundColor, 42000)    
    }

    componentDidMount(){
        
        this.setCoutDownInterval();
        this.launchTimer();
    }

    changeBackgroundColor(){

        let div = document.getElementById("target");
        div.style.backgroundColor = "red";
        div.style.height = "200px";
        div.style.height = "200px";
        console.log("background was changed")
    }
    
    countDown(){

        this.setState(
            {
                 counter: this.state.counter - 1 

            }, console.log(this.state.counter)
        );
    }

    render(){

        if(this.state.counter < 0){

            clearInterval(intervalBackground);
            clearInterval(intervalCounter); 
            console.log("All intervals were cleared!") 
        }  

        return( 
        
        <div id="target">
            <p id="p"  > 
                {this.state.counter}
                </p> 
        </div>
        
        )
    }
}

export default SelfDestructTimerComponent;

