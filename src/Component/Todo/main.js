import React, { Component } from 'react';
import Header from './input';
import List from './list';
import Task from './task';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task:'No Entry',
            taskarray:[],

         }
    }
onChange=(event)=>{
        const newTask = event.target.value;
        this.setState({
            task:newTask
        });
        console.log(this.state.task,"Value in Main")
}
addData=()=>{
    const newid = Math.random()*1000*Math.random();
    const newTask = new Task(this.state.task,newid);
    console.log(newTask,"new Task")
    const newArray=[...this.state.taskarray,newTask];
    console.log(newTask,"Array")
    this.setState({
        taskarray:newArray
    });
    console.log(this.state.taskarray,"State array")
}
    render() { 
        return ( 
            <div>
                <Header
                    Taketask={this.onChange} addData={this.addData}/>
                <List 
                    List={this.state.taskarray}
                />
            </div>
         );
    }
}
 
export default Main;