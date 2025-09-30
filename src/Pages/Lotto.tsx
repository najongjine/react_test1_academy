import { useEffect, useState } from "react";

/* GPT 안쓴 석기시대 로또번호 만들기 */
export default function Lotto() {
  const [lottoNum, setlottoNum] = useState<number[]>([]);

  async function onGenterateNumber(event: React.MouseEvent) {
    /* 번호가 바이러스처럼 증식되는걸 고쳐 봅시다 */
    setlottoNum([]);
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 9999999) % 46;
      if (randomNum <= 0) randomNum = 1;
      /* state 배열에 데이터 추가하는 react 문법 */
      setlottoNum((e) => [...e, randomNum]);
    }
  }

  return (
    <div className="content-margin-padding">
      <div>lotto 화면</div>
      <div>
        {lottoNum.map((e) => (
          <span>{e}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        ))}
      </div>
      <div>
        <button onClick={onGenterateNumber}>번호생성</button>
      </div>
    </div>
  );
}
