import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-[70%] flex justify-between border p-8">
      <Link href="/" className="text-lg">
        Home
      </Link>

      <ul>
        <li>
          <Link href="/posts">All posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
