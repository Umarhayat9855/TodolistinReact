import React, { Component } from 'react';
import Task from './Component/Classes/task';
import Header from './Component/Header/header';
import Contant from './Component/Contant/contant';
import Footer from './Component/Footer/footer';
import img1 from './Assests/umar.JPG';
//import Main from './Component/Todo/main';
import Funtion from './Component/Function/function';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      values:[{id:'1',Name:'umar ffwe'},{id:'2',Name:'umar wq'},
      {id:'4',Name:'umar 4'},],
      task:'',
      TaskArray:[],
     }
  }
  onChange=(event)=>{
    const newtask=event.target.value;
    this.setState({
      task:newtask
    });
    console.log("Value in task",this.state.task)
  }
  adddata=()=>{
    const newid=Math.random()*1000*Math.random();
    console.log("create id is",newid);
    const newTask = new Task(this.state.task,newid);
    const newArray=[...this.state.TaskArray,newTask];
    this.setState({
      TaskArray:newArray
    });
  }
  delete=(id)=>{
    console.log("Isd is",id);
    const newArray=this.state.TaskArray.filter(ls=>ls.id!==id);
    this.setState({
      TaskArray:newArray
    });
  }
  edittask=(id)=>{
    console.log("Id in edit",id);
    const editarray=this.state.TaskArray;
    const index=this.state.TaskArray.findIndex(ls=>ls.id === id)
    if(index>=0){
      editarray[index]=new Task(this.state.task,id)
    }
    this.setState({
      Taketask:editarray
    })
  }
  render() { 
    return ( 
      <div>
        {/* <Funtion/> */}
         <Header
          Taketask={this.onChange} adddata={this.adddata}
        />
        <Contant
          TaskArray={this.state.TaskArray}
          delete={this.delete}
          edit={this.edittask}
          Taketask={this.onChange}
        /> 
        {/* <Footer/> */}
        {/* <Main/> */}
        <div>
          {/* <img src={img1} style={{width:300,height:200,marginLeft:300,alt:"Avatar"}}/> */}
        </div>
      </div>
     );
  }
}
 
export default App;