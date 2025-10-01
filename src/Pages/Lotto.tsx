import { useEffect, useState } from "react";

/* GPT 안쓴 석기시대 로또번호 만들기 */
export default function Lotto() {
  const [lottoNum, setlottoNum] = useState<number[]>([]);

  useEffect(() => {}, []);

  function onGenterateNumber(event: React.MouseEvent) {
    /* lottoNum 을 빈 배열로 초기화 */
    /* filter,  */
    let tempNums: number[] = [];
    for (; tempNums.length < 6; ) {
      let randomNum = Math.floor(Math.random() * 9999999) % 46;
      if (randomNum <= 0) randomNum = 1;
      let duplicate = tempNums.find((e) => e == randomNum);
      // continue 뜻은 아래에 있는거 실행하지 마라.
      if (duplicate) continue;
      tempNums.push(randomNum);
    }
    /* state 배열에 데이터 추가하는 react 문법 */
    //setlottoNum(tempNums);
    let numbers = generateLottoNumbers();
    setlottoNum(numbers);
  }

  /**
   * 1부터 45 사이의 로또 번호 6개를 중복 없이 생성하는 함수입니다.
   * @returns {number[]} 6개의 로또 번호를 담고 있는 배열
   */
  const generateLottoNumbers = (): number[] => {
    const lottoNumbers: number[] = [];
    const MAX_NUMBER = 45;
    const COUNT = 6;

    // 1부터 45까지의 모든 숫자를 배열로 만듭니다.
    const allNumbers = Array.from({ length: MAX_NUMBER }, (_, i) => i + 1);

    // 배열을 무작위로 섞습니다 (Fisher-Yates 셔플 알고리즘의 변형).
    // Math.random()은 0과 1 사이의 부동 소수점 난수를 반환합니다.
    for (let i = allNumbers.length - 1; i > 0; i--) {
      // 0부터 i까지의 무작위 인덱스를 선택합니다.
      const j = Math.floor(Math.random() * (i + 1));
      // 현재 요소 allNumbers[i]와 무작위로 선택된 요소 allNumbers[j]를 교환합니다.
      [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }

    // 섞인 배열의 앞에서 6개 숫자를 가져옵니다.
    // slice() 메서드는 새로운 배열을 반환합니다.
    const selectedNumbers = allNumbers.slice(0, COUNT);

    // 로또 번호는 보통 오름차순으로 정렬되므로, 정렬 후 반환합니다.
    return selectedNumbers.sort((a, b) => a - b);
  };

  // 사용 예시:
  // const myLotto = generateLottoNumbers();
  // console.log(myLotto); // [3, 15, 22, 30, 38, 41] (예시)

  return (
    <div className="content-margin-padding">
      <div>lotto 화면</div>
      <div>
        {lottoNum.map((e) => (
          <span key={e}>{e}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        ))}
      </div>
      <div>
        <button onClick={onGenterateNumber}>번호생성</button>
      </div>
    </div>
  );
}
