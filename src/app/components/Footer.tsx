import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-gray-800 bg-[#15171D]">

            <div
                className="
                    container
                    mx-auto
                    flex
                    flex-col
                    gap-6
                    px-4
                    py-8
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:px-6
                    lg:px-8
                "
            >

                {/* ================= LOGO ================= */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image
                        src={Logo}
                        alt="FitLog Logo"
                        width={38}
                        height={38}
                        className="h-9 w-9 sm:h-10 sm:w-10"
                    />

                    <span className="text-lg font-bold sm:text-xl">
                        FIT LOG
                    </span>
                </Link>


                {/* ================= COPYRIGHT ================= */}
                <p className="text-sm leading-6 text-gray-400 sm:text-right">
                    © 2026 FitLog — Workout Library.
                    <br className="sm:hidden" />
                    {" "}Train hard, log honest.
                </p>

            </div>

        </footer>
    );
};

export default Footer;