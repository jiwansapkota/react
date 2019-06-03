import React, { Component } from 'react'

export class Usergreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             islogged: true
        }
    }
    
    render() {
        let message
        this.state.islogged ? message= <h1>hello jiwan</h1> : message=<h1>hello bhuwan</h1>;
        return( <div>{message}</div>);
       /* if(this.state.islogged){ 
           message= <h1>hello jiwan</h1>            
        }
            else{
                message=<h1>hello bhuwan</h1>   
            }
            return (
                <div>
                   {message}
                    
                </div>
            )*/
        

       
       
    }
}

export default Usergreeting;
