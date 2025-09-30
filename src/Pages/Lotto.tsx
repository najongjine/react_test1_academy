import { useEffect, useState } from "react";

/* GPT 안쓴 석기시대 로또번호 만들기 */
export default function Lotto() {
  const [lottoNum, setlottoNum] = useState<number[]>([]);

  async function onGenterateNumber(event: React.MouseEvent) {
    /* lottoNum 을 빈 배열로 초기화 */
    /* filter,  */
    setlottoNum([]);
    let tempNums: number[] = [];
    for (; setlottoNum.length < 6; ) {
      let randomNum = Math.floor(Math.random() * 9999999) % 46;
      if (randomNum <= 0) randomNum = 1;
      let duplicate = tempNums.find((e) => e == randomNum);
      // continue 뜻은 아래에 있는거 실행하지 마라.
      if (duplicate) continue;
      alert(`dup: ${duplicate}`);
      tempNums.push(randomNum);
    }
    /* state 배열에 데이터 추가하는 react 문법 */
    setlottoNum(tempNums);
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
