import React, { useState } from 'react';
import Break from './components/Break'
import Session from './components/Session'
import TimeLeft from './components/TimeLeft'
import './App.css';

function App() {
  const [sessionLength, setSessionLength] = useState(1500);

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60

    if(newSessionLength < 0) {
      setSessionLength(0)
    } else {
      setSessionLength(newSessionLength)
    }
  }
  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60)
  }
  const [breakLength, setBreakLength] = useState(300);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60

    if(newBreakLength < 0) {
      setBreakLength(0)
    } else {
      setBreakLength(newBreakLength)

    }
  }
  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60)
  }
  

  return (
    <div className="App">
      <Break 
      sessionLength={sessionLength}
      decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
      />
      <TimeLeft sessionLength={sessionLength}/>
      <Session
      sessionLength={sessionLength}
      decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
      />
      
    </div>
  );
}


export default App;
