import React, { Component } from 'react'

export default class Classclick extends Component {
    clickhandler=()=>{
        console.log('button clicked from class');

    }
       render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}
