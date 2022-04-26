import React, { useEffect, useState, useRef } from "react";

function Clock() {
  const [clockState, setClockState] = useState();
  const ref = useRef()
  const [height, setHeight] = useState('28');
  console.log(height);
  useEffect(() => {
        console.log(ref.current.clientHeight);
        // setHeight(ref.current.clientHeight)
}, [ref.current])
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  function mouse(){
    setHeight(ref.current.clientHeight)
  }
  if (clockState === "10:57:30 PM")
  {
      console.log("Time")
  }
  return <div style={{ fontSize: "25px", margin: "60px", background: "green", resize: "both", overflow: "auto"}}
  onMouseUp={mouse}
   ref={ref}>{clockState}</div>;
}



export default Clock;