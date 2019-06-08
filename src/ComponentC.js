import React, { Component } from 'react'
import { UserConsumer } from './newComponents/userContex';

class ComponentC extends Component {
    render() {
        return (
                <UserConsumer>
                     {(value) =>{ return(<div>Hello {value} {value.surname} from Component C</div>)}}
                     </UserConsumer>
        )
    }
}

export default ComponentC
