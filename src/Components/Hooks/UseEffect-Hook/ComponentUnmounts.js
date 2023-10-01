import React, { useState, useEffect } from "react";

const ComponentUnmounts = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let watch=setInterval(handleTime,1000)
    return () => {
        clearInterval(watch)
    };
  }, []);

  const handleTime=()=>{
setTimer((prevTimer)=>prevTimer+1)
  }
  return <div>
    <h1>when Components unmounts/deletes</h1>
    <h3>{timer}</h3>
    </div>;
};

export default ComponentUnmounts;
