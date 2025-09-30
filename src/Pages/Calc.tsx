import { useEffect, useState } from "react";

export default function Calc() {
  /* inputVal 이라는 바인딩 변수랑 set 함수 만들어 주세요.
  타입은 string */
  const [inputVal, setinputVal] = useState<string>("");
  const [evalResult, setevalResult] = useState<string>("");
  let dummy = "hello";
  useEffect(() => {
    dummy = "bye";
  }, []);

  function onInputEnter(event: React.KeyboardEvent) {
    let key = event?.key;
    if (key == "Enter") {
      const hasOtherCharacters = /[^0-9+\-*/%]/.test(inputVal);

      if (hasOtherCharacters) {
        alert("수학 수식만 입력해 주세요");
        return;
      }
      let data = eval(inputVal);
      setevalResult(data);
    }
  }

  return (
    <div className="content-margin-padding">
      <div>
        <input
          value={inputVal}
          onChange={(event) => {
            let input_value = event?.target?.value ?? "";
            // 숫자와 +, -, *, /, % 만 허용하는 정규식

            setinputVal(input_value);
          }}
          onKeyDown={onInputEnter}
        />
        <div> = {evalResult}</div>
        <div>내가 타이핑 한거: {inputVal}</div>
      </div>
    </div>
  );
}
