import React from 'react'

const userContex = React.createContext('codeEvolution');
const UserProvider = userContex.Provider;
const UserConsumer = userContex.Consumer;
export {UserProvider,UserConsumer};