import { useEffect, useState } from "react";

interface Memotype {
  content: string;
  createdDt: string;
  updatedDt: string;
  id: number;
  title: string;
}

export default function MemoUpsert() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [memo, setMemo] = useState<Memotype>();

  useEffect(() => {}, []);

  return (
    <div className="content-margin-padding">
      <div>메모 작성</div>

      <div>
        <button>save</button>
      </div>
    </div>
  );
}
