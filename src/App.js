import React from 'react';
import './App.css';
import ComponentA from './ComponentA';
import { UserProvider } from './newComponents/userContex';
//import HoverCounter from './newComponents/HoverCounter';
//import ClickCounter from './newComponents/ClickCounter';
//import WithCounter from './newComponents/WithCounter';
//import User from './newComponents/User'

function App() {
  const values ={
    name: 'Jiwan',
    surname:'Sapkota'

  }
  return (
    <div className="App">
      {/* <UserProvider value={values}> */}
         <ComponentA />
         {/* </UserProvider> */}
    {/*<WithCounter render={(count,incrementCount)=>(
      <HoverCounter count={count} incrementCount={incrementCount}/>
      )}/>
     <WithCounter render={(count,incrementCount)=>(
      <ClickCounter count={count} incrementCount={incrementCount}/>
     )}/>*/}
 </div>
  );
}

export default App;
