// import React, { useEffect } from "react";
// import { useLogger } from "react-use";

// export default function DigitsMaker(props) {
//   useLogger("DigitsMaker", props);
//   const [inputVal, setInputVal] = React.useState("222");
//   const [randomVal, setRandomVal] = React.useState(0);
//   const [isRandom, setIsRandom] = React.useState(false);
//   let inputRef = React.useRef(null);
//   let id = React.useRef(null);

//   let clear = () => window.clearTimeout(id);

//   const handleInput = (e) => {};

//   const makeRandomDigits = () => {
//     let str2 = Math.random().toString().substr(2, 3);
//     return str2;
//   };

//   // let clear;

//   const generateRandomEffect = React.useCallback(() => {
//     for (let i = 0; i < 10; i++) {
//       id.current = setTimeout(() => {
//         setRandomVal(makeRandomDigits());
//       }, 100 * i); // Add a delay for each iteration
//     }
//     // switch off randomizer
//     setIsRandom(false);
//   }, [id]);

//   const playRandom = () => {
//     // start the effect
//     setIsRandom(true);
//   };

//   const handleRandomEffect = React.useCallback(() => {
//     generateRandomEffect();
//   }, [generateRandomEffect]);

//   useEffect(() => {
//     if (isRandom) {
//       handleRandomEffect();
//     }

//     return clear;
//   }, [isRandom, handleRandomEffect]);

//   return (
//     <>
//       <div>
//         <span>
//           <b>rand 3 digits : </b>
//         </span>
//         <span>{!isRandom ? inputVal : randomVal}</span>
//         <br />
//         <input ref={inputRef} onChange={handleInput} />
//         <button onClick={playRandom}>start effect</button>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useLogger } from "react-use";

const RandomizingEffect = () => {
  useLogger("RandomizingEffect", {});
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
  };

  const startRandomizing = () => {
    setIsRandomizing(true);
  };

  const stopRandomizing = () => {
    setIsRandomizing(false);
  };

  let _clearTimeout;

  useEffect(() => {
    if (isRandomizing) {
      const intervalId = setInterval(() => {
        setRandomNumber(getRandomNumber());
      }, 100); // Change the interval speed to adjust the randomizing effect

      _clearTimeout = setTimeout(() => {
        clearInterval(intervalId);
        stopRandomizing();
      }, 1000); // Stop after 2 seconds
    }
    console.log(_clearTimeout);
    return () => window.clearTimeout(_clearTimeout);
  }, [isRandomizing]);

  return (
    <div>
      <h1>Randomizing Effect: {randomNumber}</h1>
      <button onClick={startRandomizing}>Start Randomizing</button>
    </div>
  );
};

export default RandomizingEffect;
