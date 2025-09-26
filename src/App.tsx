import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  /* inputVal 이라는 바인딩 변수랑 set 함수 만들어 주세요.
  타입은 string */
  const [inputVal, setinputVal] = useState<string>("");
  let dummy = "hello";
  useEffect(() => {
    dummy = "bye";

    let data = eval("1+2");
    console.log(`data: ${data}`);
  }, []);

  return (
    <div>
      <div>
        <input
          value={inputVal}
          onChange={(event) => {
            let input_value = event?.target?.value ?? "";
            dummy = input_value;
            setinputVal(input_value);
          }}
          onKeyDown={(event) => {
            let key = event?.key;
            if (key == "Enter") {
              alert("앤터 누름");
            }
          }}
        />
        <div>{dummy}</div>
        <div>내가 타이핑 한거: {inputVal}</div>
      </div>
    </div>
  );
}

export default App;
