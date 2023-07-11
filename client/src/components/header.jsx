import React from "react";

export default function NavHeader() {
  return (
    <header className="flex items-center justify-between py-2 bg-header px-[100px] w-full">
      <div className="">
        <a href="/">
          <div className="flex items-center translate-y-1/2">
            <img
              className="border-0 rounded-full"
              src={"../Logo.png"}
              width={90}
              height={50}
              alt={"logo"}
            />
          </div>
        </a>
      </div>

      <nav className="items-center">
        <ul className="items-center flex font-medium text-[16px]">
          <li className="mx-4">
            <a href="/">
              <span className="hover:text-white">Home</span>
            </a>
          </li>
          <li className="mx-4">
            <a href="/">
              <span className="hover:text-white">Book a Room</span>
            </a>
          </li>
          <li className="mx-4">
            <a href="/">
              <span className="hover:text-white">Feedback</span>
            </a>
          </li>
          <li className="mx-4">
            <a href="/">
              <div className="border-0 px-6 py-2 rounded-lg bg-green-400">
                <span className="text-white pt-4 hover:text-black">Login</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
