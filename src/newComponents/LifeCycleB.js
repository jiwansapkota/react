import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'jiwan'
         }
         console.log("LifecycleB from constructor")
     }
    static getDerivedStateFromProps(props,state){
            console.log("LifecycleB from getDerivedStateFromProps")
            return null;
         }
    
         componentDidMount(){
            console.log("LifecycleB from ComponentDidMOunt")
         }
         shouldComponentUpdate(){
             console.log("LifecycleB shouldComponentUpdate")
             return true;
         }
         getSnapshotBeforeUpdate(prevProps,PrevState){
             console.log('LifecycleB getSnapshotBeforeUpdate');
             return null;  
         }
         componentDidUpdate(){
             console.log('LifecycleB componentDidUpdate');
         }
    render() {
        console.log("LifecycleB from render")
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifeCycleB
