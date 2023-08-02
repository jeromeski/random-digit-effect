import { useEffect, useState, useCallback, useRef } from "react";
import DigitsMaker from "./components/digits-maker";
import "./styles.css";

export default function App() {
  // const [isGenId, setIsGenId] = useState(false);
  // const [num, setNum] = useState(null);
  // let numRef = useRef(null);

  // const makeRandomDigits = () => {
  //   let str2 = Math.random().toString().substr(2, 3);
  //   setNum(str2);
  // };

  // let clear;

  // const genId = useCallback(() => {
  //   for (let i = 0; i < 10; i++) {
  //     clear = setTimeout(() => {
  //       makeRandomDigits();
  //     }, 3000); // Add a delay for each iteration
  //   }
  //   setIsGenId(false);
  // }, []);

  // const handleChange = (e) => {
  //   setTimeout(() => {
  //     console.log(e.target.value);
  //     setNum(e.target.value);
  //   }, [3000]);
  // };

  // useEffect(() => {
  //   if (isGenId) {
  //     genId(clear);
  //   }
  //   return clear;
  // }, [isGenId, genId]);

  return (
    <div className="App">
      <DigitsMaker />
    </div>
  );
}
