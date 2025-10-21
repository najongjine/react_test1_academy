import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Memotype {
  content: string;
  createdDt: string;
  updatedDt: string;
  id: number;
  title: string;
}

export default function MemoDetail() {
  const [searchParams] = useSearchParams();
  const memoId = Number(searchParams?.get("id") ?? 0);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [memo, setMemo] = useState<Memotype>({
    content: "",
    createdDt: "",
    updatedDt: "",
    id: 0,
    title: "",
  });

  useEffect(() => {
    getMemo();
  }, []);

  async function getMemo() {
    try {
      const fetchOption = {
        method: "GET",
        headers: {
          Authorization: "",
        },
      };
      let result: any = await fetch(
        `${API_BASE_URL}/api/board/get_memo?id=${memoId}`,
        fetchOption
      );
      result = await result.json();
      if (!result?.success) {
        alert(`메모 데이터 가져오기 실패. ${result?.msg}`);
        return;
      }
      setMemo(
        result?.data ?? {
          content: "",
          createdDt: "",
          updatedDt: "",
          id: 0,
          title: "",
        }
      );
    } catch (error: any) {
      console.log(`서버 에러! ${error?.message ?? ""}`);
    }
  }

  return (
    <div className="content-margin-padding">
      <div>상세내용</div>

      <div></div>
      <button> 리스트로 이동</button>
    </div>
  );
}
