import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MemoList.css";

interface Memotype {
  content: string;
  createdDt: string;
  updatedDt: string;
  id: number;
  title: string;
}

export default function MemoList() {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [memo, setMemo] = useState<Memotype[]>([]);

  useEffect(() => {
    getMemoList();
  }, []);

  function onMemoUpsert(id = 0) {
    navigate(`/memo_upsert?id=${id}`);
  }

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
          <div className="memo-item-container" key={e?.id}>
            <div className="memo-content">{e.title}</div>
            <div className="memo-info-actions">
              <div className="memo-date">{e.createdDt}</div>
              {/* 나중에 추가할 버튼 위치 */}
              <button
                className="memo-button"
                onClick={() => {
                  onMemoUpsert(e?.id ?? 0);
                }}
              >
                수정
              </button>
              <button className="memo-button">삭제</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => {
            onMemoUpsert(0);
          }}
        >
          new
        </button>
      </div>
    </div>
  );
}
