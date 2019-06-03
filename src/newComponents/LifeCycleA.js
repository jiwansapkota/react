import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'jiwan'
         }
         console.log("LifecycleA from constructor")
     }
    static getDerivedStateFromProps(props,state){
            console.log("LifecycleA from getDerivedStateFromProps")
            return null;
         }
    
     componentDidMount(){
        console.log("LifecycleA from ComponentDidMOunt")
     }
     shouldComponentUpdate(){
         console.log("lifecycleA shouldComponentUpdate")
         return true;
     }
     getSnapshotBeforeUpdate(prevProps,PrevState){
         console.log('lifecycleA getSnapshotBeforeUpdate');
         return null;
     }
     componentDidUpdate(){
         console.log('lifecycleA componentDidUpdate');
     }
     changeState=()=>{
         this.setState({
             name:'codeevolution'
         })
     }
     
    render() {
        console.log("LifecycleA from render")
        return (
            <div>
                <button onClick={this.changeState}>Change State </button> 
                LifeCycleA
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
