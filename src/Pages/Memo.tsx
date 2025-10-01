import { useEffect, useState } from "react";

export default function Memo() {
  return (
    <div className="content-margin-padding">
      <div>memo 화면</div>
      <div>
        <textarea placeholder="메모를 입력하세요" cols={100} />
      </div>
    </div>
  );
}
