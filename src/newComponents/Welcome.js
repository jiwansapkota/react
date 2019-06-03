import React,{Component} from 'react';
class Welcome extends Component{
    render(){
        const {name,heroname}= this.props;
        return <h1> welcome {name} A.K.A {heroname} in class </h1>
    }

}
export default Welcome;
