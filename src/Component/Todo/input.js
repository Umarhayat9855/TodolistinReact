import React, { Component } from 'react';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task:'',
         }
    }
    render() { 
        return ( 
            <div>
                <input
                    // onChange={(e)=>this.setState({task:e.target.value})}
                    onChange={this.props.Taketask}
                />
                <button 
                    onClick={this.props.addData}
                >
                    <h4>Add Task</h4>
                </button>
                <h6>{this.state.task}</h6>
                <h6>{this.props.task}</h6>
            </div>
         );
    }
}
 
export default Input;