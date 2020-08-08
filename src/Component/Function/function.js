import React, { Component } from 'react';
class Function extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            umar:'Muhammad Umar Hayat'
         }
    }

onpress =() => {
alert("onpress is called",this.state.umar)
console.log("onpress is called",this.state.umar)
}

    render() { 
        return ( 
            <div>
                <button
                onClick={this.onpress}
                >
                    <h5>on press</h5>
                </button>
            </div>
         );
    }
}
 
export default Function;