import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    state={
        
    }
    render() { 
        console.log(this.props.task)
        return ( 
            <div class="containerHeader">
                <h3 class='font'>Add Todo Task</h3>
                <input class="input"
                    // onChange={(e)=>this.setState({task:e.target.value})}
                    onChange={this.props.Taketask}
                />
                <button class="buttonstyle"
                >
                   
                    <h4 style={{color:'green'}}
                    onClick={this.props.adddata}
                    >Add Task</h4>

                </button>
            </div>
            
         );
    }
}
export default Header;
const style={
    font:{
        color:'red',
        fontSize:15,
    },
    input:{
        width:200,
        height:50,
    },
}