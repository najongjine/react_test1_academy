import { useEffect, useState } from "react";

export default function Memo() {
  return (
    <div className="content-margin-padding">
      <div>memo 화면</div>
      <div>
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border-2 border-black focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
          placeholder="메모를 입력하세요"
          cols={100}
        />
      </div>
    </div>
  );
}
