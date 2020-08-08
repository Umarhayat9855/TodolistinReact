import React, { Component } from 'react';
import './contant.css'
class Contant extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           edit:false,
           id:'',
        }
            
    }
    render() { 
        console.log(this.props.TaskArray)
        return ( 
            <div>
                <h2 id="TodoHeading">Todo List is</h2>
                {
                    this.props.TaskArray.map(ls=>
                        <div style={{height:100,width:'50%',backgroundColor:'gray',marginLeft:'25%'}}>
                            <h4 style={{textAlign:'center'}}> Task:{ls.task}</h4> 
                            <button style={{marginLeft:'40%'}}
                                onClick={()=>this.props.delete(ls.id)}
                            >
                                Delete
                            </button>
                            {
                                this.state.edit ===true && this.state.id===ls.id?
                                <div>
                                    <input
                                        onChange={this.props.Taketask}
                                    />
                                    <button
                                        onClick={()=>{this.props.edit(ls.id);this.setState({edit:false,id:''})}}
                                    >
                                        Add Edit
                                    </button>
                                    </div>
                                    :
                                    <button
                                        onClick={()=>this.setState({edit:true,id:ls.id})}
                                    >
                                        Edit
                                    </button>
                                
                            }
                            {/* <button style={{marginLeft:'1%'}}
                                onClick={()=>this.props.edit(ls.id)}
                            >
                                Edit
                            </button> */}
                        </div>
                        )
                }
            </div>
         );
    }
}
export default Contant;