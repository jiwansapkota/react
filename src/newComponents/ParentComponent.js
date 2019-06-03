import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parents:'Tanka and Sumitra'
         }
         this.greetparent=this.greetparent.bind(this);

     }
     greetparent(childname){
         alert(`my name is ${childname} and my parnets are ${this.state.parents}`)
     }
    render() {
        return (
            <div>
                <ChildComponent statehandler={this.greetparent}/>
            </div>
        )
    }
}

export default ParentComponent
