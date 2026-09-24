"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";
import { useFitlog } from "@/context/FitLogContext";

const Navbar = () => {
  const { planWorkouts, savedWorkouts } = useFitlog();

  /* ================= NAVIGATION LINKS ================= */

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="hover:text-[#ccff00]"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className="hover:text-[#ccff00]"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#15171D] shadow-md">

      <div className="navbar container mx-auto min-h-16 px-3 sm:px-4">

        {/* ================= LEFT ================= */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm mr-1 p-2"
              aria-label="Open menu"
            >
              <svg
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
              className="
                                menu
                                menu-sm
                                dropdown-content
                                z-50
                                mt-3
                                w-48
                                rounded-xl
                                bg-[#222630]
                                p-2
                                text-white
                                shadow-xl
                            "
            >
              {navLinks}
            </ul>

          </div>


          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src={Logo}
              alt="FitLog Logo"
              width={38}
              height={38}
              priority
              className="sm:h-10 sm:w-10"
            />

            <span className="text-base font-bold sm:text-xl">
              FIT LOG
            </span>
          </Link>

        </div>


        {/* ================= CENTER ================= */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-2 text-sm font-medium">
            {navLinks}
          </ul>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="navbar-end">

          <div className="flex items-center gap-1.5 sm:gap-3">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="
                                badge
                                border-none
                                bg-[#ccff00]
                                px-2.5
                                py-3
                                text-xs
                                font-semibold
                                text-black
                                transition
                                hover:bg-[#b4e600]
                                sm:px-3
                                sm:text-sm
                            "
            >
              Plan ({planWorkouts.length})
            </Link>


            {/* Saved */}
            <Link
              href="/my-plan"
              className="
                                badge
                                px-2.5
                                py-3
                                text-xs
                                font-semibold
                                text-white
                                transition
                                hover:border-[#ccff00]
                                hover:text-[#ccff00]
                                sm:px-3
                                sm:text-sm
                            "
            >
              Saved ({savedWorkouts.length})
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;