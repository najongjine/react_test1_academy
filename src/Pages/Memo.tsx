import { useEffect, useState } from "react";

export default function Memo() {
  const [memo, setmemo] = useState<string>("");
  return (
    <div className="content-margin-padding">
      <div>memo 화면</div>

      <div>
        <form method="post" onSubmit={() => {}}>
          <div>
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border-2 border-black focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              placeholder="메모를 입력하세요"
              cols={100}
              rows={10}
              value={memo}
              onChange={(event) => {
                setmemo(event?.target?.value ?? "");
              }}
              onKeyDown={(event) => {}}
              maxLength={1000}
            />
          </div>
          <br />
          <div className="flex">
            <button
              className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-auto"
              data-ripple-light="true"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
