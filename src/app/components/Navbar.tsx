import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";

const Navbar = () => {
  // Navbar links
  const navLinks = (
    <>
      <li>
        <Link href="/">Workouts</Link>
      </li>
      <li>
        <Link href="/my-plan">My Plan</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Logo + Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Fit Log Logo"
            width={40}
            height={40}
          />

          <span className="text-xl font-bold">FIT LOG</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-4">
        {/* Plan */}
        <div className="flex items-center gap-1">
          <Link
            href="/my-plan"
            className="badge bg-[#ccff00] text-black"
          >
            Plan
          </Link>

          {/* <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
            2
          </span> */}
        </div>

        {/* Saved */}
        <div className="flex items-center gap-1">
          <Link
            href="/my-plan"
            className="badge badge-outline"
          >
            Saved
          </Link>

          {/* <span className="flex h-5 w-5 items-center justify-center rounded-full border border-base-content text-xs">
            5
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;