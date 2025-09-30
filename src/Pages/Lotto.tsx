import { useEffect, useState } from "react";

/* GPT 안쓴 석기시대 로또번호 만들기 */
export default function Lotto() {
  const [lottoNum, setlottoNum] = useState<number[]>([]);

  async function onGenterateNumber(event: React.MouseEvent) {}

  return (
    <div className="content-margin-padding">
      <div>lotto 화면</div>
      <div>
        <button onClick={onGenterateNumber}>번호생성</button>
      </div>
    </div>
  );
}
