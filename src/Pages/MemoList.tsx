import { useEffect, useState } from "react";
import "./MemoList.css";

interface Memotype {
  content: string;
  createdDt: string;
  updatedDt: string;
  id: number;
  title: string;
}

export default function MemoList() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [memo, setMemo] = useState<Memotype[]>([]);

  useEffect(() => {
    getMemoList();
  }, []);

  async function getMemoList() {
    const fetchOption = {
      method: "GET",
      headers: {
        Authorization: "",
      },
    };
    let res: any = await fetch(
      `${API_BASE_URL}/api/board/get_memo_list`,
      fetchOption
    );
    res = await res.json();
    setMemo(res?.data ?? []);
    console.log(`## res: `, res);
  }

  return (
    <div className="content-margin-padding">
      <div>메모 List</div>

      <div>
        {memo.map((e) => (
          <div className="memo-item-container">
            <div className="memo-content">{e.title}</div>
            <div className="memo-info-actions">
              <div className="memo-date">{e.createdDt}</div>
              {/* 나중에 추가할 버튼 위치 */}
              <button className="memo-button">수정</button>
              <button className="memo-button">삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
