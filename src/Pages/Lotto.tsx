import { useEffect, useState } from "react";

/* GPT 안쓴 석기시대 로또번호 만들기 */
export default function Lotto() {
  const [lottoNum, setlottoNum] = useState<number[]>([]);

  async function onGenterateNumber(event: React.MouseEvent) {
    /* 번호를 하나씩 list에 넣는다 
    번호는 랜덤으로 생성해봅시다 */
    let randomNum = Math.floor(Math.random() * 9999999);
    console.log(randomNum);
  }

  return (
    <div className="content-margin-padding">
      <div>lotto 화면</div>
      <div>
        <button onClick={onGenterateNumber}>번호생성</button>
      </div>
    </div>
  );
}
