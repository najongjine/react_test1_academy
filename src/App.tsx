import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  /* inputVal 이라는 바인딩 변수랑 set 함수 만들어 주세요.
  타입은 string */
  const [inputVal, setinputVal] = useState<string>("");
  const [evalResult, setevalResult] = useState<string>("");
  let dummy = "hello";
  useEffect(() => {
    dummy = "bye";
  }, []);

  return (
    <div>
      <div>
        <input
          value={inputVal}
          onChange={(event) => {
            let input_value = event?.target?.value ?? "";
            // 숫자와 +, -, *, /, % 만 허용하는 정규식
            const filtered_value = input_value.replace(/[^0-9+\-*/%]/g, "");
            setinputVal(input_value);
          }}
          onKeyDown={(event) => {
            let key = event?.key;
            if (key == "Enter") {
              let data = eval(inputVal);
              setevalResult(data);
            }
          }}
        />
        <div> = {evalResult}</div>
        <div>내가 타이핑 한거: {inputVal}</div>
      </div>
    </div>
  );
}

export default App;
