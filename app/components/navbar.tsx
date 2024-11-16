'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    //SVG path for buttom arrow 
    const iconPath = "396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5";
    // handles the hamberger on off
    const [navopen, setNavOpen] = useState(false);
    return (
        //Top Level
        <nav className="lg:w-full bg-white border-b border-gray-200 py-4 sm:px-40 md:px-10 lg:px-40 px-20">
            <div className="flex justify-between items-center sm:mx-20 md:mx-10 lg:mx-20">
                {/* Logo part */}
                <Link href="/">
                    <div className="text-2xl font-semibold lg:pr-0 md:pr-5">
                        Logo
                    </div>
                </Link>
                {/* Desktop View hidden for smaller devices */}
                <div className="hidden sm:space-x-5 md:space-x-1.6 lg:space-x-5 sm:flex">
                    <NavItem label="Courses" icon={iconPath} href="/courses" />
                    <NavItem label="Instructors" icon={iconPath} href="/instructors" />
                    <NavItem label="Blogs" icon={iconPath} href="/blogs" />
                    <Link href="/about">
                        <div className="flex items-center cursor-pointer">
                            About
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="flex items-center cursor-pointer">
                            Contact
                        </div>
                    </Link>
                </div>
                <div className="hidden sm:flex items-center space-x-6 md:pl-3 lg:pl-0">
                    <Link href="/cart">
                        <img className="max-h-5" src="/carticon.png" alt="" />
                    </Link>
                    <Link href="/signin">
                        <button className="px-5 py-1.5 bg-teal-700 text-white rounded-full hover:bg-teal-600">Login</button>
                    </Link>
                </div>
                {/* Hamburger icon for mobile devices hidden for Desktop and ipad */}
                <div className=" md:hidden">
                    <button className="sm:hidden flex items-center"
                        onClick={() => setNavOpen(!navopen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile View using hambarger conditon based render and hide for mid to large device */}
            {navopen && (
                <div className="sm:hidden mt-2 space-y-2 flex flex-col items-center">
                    <NavItem label="Courses" icon={iconPath} href="/courses" />
                    <NavItem label="Instructors" icon={iconPath} href="/instructors" />
                    <NavItem label="Blogs" icon={iconPath} href="/blogs" />
                    <Link href="/about">
                        <div className="flex items-center cursor-pointer">
                            About
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="flex items-center cursor-pointer">
                            Contact
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className="flex items-center cursor-pointer">
                            <img className="max-h-5" src="/carticon.png" alt="" />
                        </div>
                    </Link>
                    <Link href="/signin">
                        <button className="w-full px-5 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-600">
                            Login
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}

// Navgation Item Components
type NavItemProps = {
    label: string;
    icon: string;
    href: string;
};

const NavItem = ({ label, icon, href }: NavItemProps) => (
    <Link href={href} passHref>
        <div className="flex items-center cursor-pointer">
            {label}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="16"
                height="16"
                className="ml-2"
            >
                <polygon points={icon} />
            </svg>
        </div>
    </Link>
);
