import React from 'react';
const Greet= (props)=>{
    const{name,heroname}=props;
    return(
        <div>
                <h1> Hello {name} A.K.A {heroname} </h1>
    </div>
    )
}

export default Greet;