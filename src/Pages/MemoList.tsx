import { useEffect, useState } from "react";

export default function MemoList() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    getMemoList();
  }, []);
  async function getMemoList() {
    const fetchOption = {
      method: "GET",
      headers: {
        Authorization: "",
      },
      body: JSON.stringify(""),
    };
    let res = await fetch(
      `${API_BASE_URL}/api/board/get_memo_list`,
      fetchOption
    );
    console.log(`## res: `, res);
  }

  return (
    <div className="content-margin-padding">
      <div>메모 List</div>
    </div>
  );
}
