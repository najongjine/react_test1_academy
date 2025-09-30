import { useEffect, useState } from "react";

export default function Header() {
  return (
    <div>
      <header>
        <h1>헤더에요</h1>
      </header>
      <ul className="topnav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}
