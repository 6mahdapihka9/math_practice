import React from 'react';

const Clock = () => (
  <div />
);
// import React, { useEffect, useState } from 'react';
//
// const Clock = () => {
//   const [time, setTime] = useState(0);
//   const [timerOn, setTimerOn] = useState(false);
//   const [stopDate, setStopDate] = useState<number | null>(null);
//
//   useEffect(() => {
//     let interval | null = null;
//
//     if (timerOn) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 10);
//       }, 10);
//     } else { clearInterval(interval); }
//
//     return () => clearInterval(interval);
//   }, [timerOn]);
//
//   function onStart() {
//     setTimerOn(true);
//     setStopDate(null);
//   }
//   function onStop() {
//     setTimerOn(false);
//     setTime(0);
//     setStopDate(null);
//   }
//   function onReset() {
//     setTime(0);
//     setTimerOn(true);
//     setStopDate(null);
//   }
//   function onWait() {
//     if (stopDate && Math.abs(stopDate - new Date()) < 300) {
//       setTimerOn(false);
//       setStopDate(null);
//     } else { setStopDate(new Date()); }
//   }
//
//  return (
//     <div className="Timers">
//       <h2>Stopwatch</h2>
//       <div id="display">
//         <span>
//           {(`0${Math.floor((time / 60000) % 60)}`).slice(-2)}
//           :
//         </span>
//         <span>
//           {(`0${Math.floor((time / 1000) % 60)}`).slice(-2)}
//           :
//         </span>
//         <span>{(`0${(time / 10) % 100}`).slice(-2)}</span>
//       </div>
//
//       <div id="buttons">
//         {!timerOn && (
//         <button type="button" onClick={onStart}>{(time === 0) ? 'Start' : 'Resume'}</button>
//         )}
//         {timerOn && (
//         <button type="button" onClick={onStop}>Stop</button>
//         )}
//         {(timerOn || time > 0) && (
//         <button type="button" onClick={onReset}>Reset</button>
//         )}
//         {timerOn && (
//         <button type="button" onClick={onWait}>Wait</button>
//         )}
//       </div>
//     </div>
//   );
// };
export default Clock;
