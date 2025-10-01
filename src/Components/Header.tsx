import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <h1>헤더에요</h1>
      </header>
      <ul className="topnav">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/memo">메모</Link>
        </li>
        <li>
          <Link to="/calc">계산기</Link>
        </li>
        <li>
          <Link to="/lotto">로또</Link>
        </li>
      </ul>
    </div>
  );
}
