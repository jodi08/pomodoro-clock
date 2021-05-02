import React, { useState, useEffect  } from 'react'
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment)

const TimeLeft = ({
  sessionLength,
}) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength)

useEffect(() => {
  setTimeLeft(sessionLength)
}, [sessionLength])

const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false})

const handleStartStopClick = () => {

  setInterval(() => {
    setTimeLeft(prevTimeLeft => {
    const newTimeLeft = prevTimeLeft - 1
    if(newTimeLeft >= 0) {
      return prevTimeLeft - 1
    } 
    return prevTimeLeft
  
  })
}, 1000)
}
  return (
    <div>
      {formattedTimeLeft}
      <button onClick={handleStartStopClick}>Start</button>
    </div>
  )
}

export default TimeLeft
