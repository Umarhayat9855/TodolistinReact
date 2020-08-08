import React, { Component } from 'react';
class List extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {
                    this.props.List.map(ls=>
                        <div>
                            <h4 style={{}}>ID:  {ls.task} </h4>   
                            <button>
                                <h2>delete</h2>
                            </button> 
                        </div>
                        )
                }
            </div>
         );
    }
}
 
export default List;