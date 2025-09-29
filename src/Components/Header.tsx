import { useEffect, useState } from "react";

export default function Header() {
  return (
    <div>
      <header className="bg-gray-100 p-2.5 text-center">
        {/* 이 부분에 헤더 내용(예: 로고나 제목)을 넣으세요. */}
        <h1 className="text-xl font-bold">My Awesome Website</h1>

        {/* --- Style the topnav --- */}
        {/* ul.topnav CSS: display: flex; margin: 0; padding: 0; background-color: #333333; justify-content: center; */}
        <ul className="flex m-0 p-0 bg-gray-800 justify-center">
          <li>
            {/* ul.topnav li a CSS: display: block; color: #f1f1f1; padding: 14px 16px; text-decoration: none; align-content: center; */}
            {/* Change color on hover CSS: ul.topnav li a:hover { background-color: #dddddd; color: black; } */}
            <a
              href="#"
              className="block text-gray-100 px-4 py-3.5 no-underline align-middle hover:bg-gray-300 hover:text-black transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-100 px-4 py-3.5 no-underline align-middle hover:bg-gray-300 hover:text-black transition-colors duration-200"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-100 px-4 py-3.5 no-underline align-middle hover:bg-gray-300 hover:text-black transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
