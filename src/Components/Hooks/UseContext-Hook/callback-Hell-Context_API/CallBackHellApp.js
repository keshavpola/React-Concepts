import React, { createContext } from 'react'
import CompA from './CompA';

const FirstName= createContext();
const LastName = createContext();

const CallBackHellApp = () => {
  return (
    <div>
      <FirstName.Provider value={"Keshav"}>
        <LastName.Provider value={"Pola"}>
        <CompA/>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default CallBackHellApp;
export {FirstName,LastName};
