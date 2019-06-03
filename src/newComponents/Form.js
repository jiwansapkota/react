import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: ''
        }
    }
    handelUsernameChange=(event)=>{
         this.setState( {
              username : event.target.value
         }) 
             }

    handelCommentChange=(event)=>{
        this.setState({
            comment: event.target.value
        })

    }
    
    render() {
        return (
           
            <div>
                 <form>
               <label>Username: </label> 
               <input type= 'text ' value={this.state.username} onChange={this.handelUsernameChange}/>
               <br/>
               <label>Comment:</label>
               <textarea value={this.state.comment} onChange={this.handelCommentChange}/>
               </form>

            </div>
            
        )
    }
}

export default Form
