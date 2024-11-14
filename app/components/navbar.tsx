import Link from "next/link";

export default function Navbar() {
    const iconPath = "396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5";

    return (
        <nav className="bg-white border-b border-gray-200 py-4 px-40">
            <div className="flex justify-between items-center mx-20">
                <div className="text-2xl font-semibold">
                    Logo
                </div>
                <div className="space-x-5 flex">
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
                <div className="flex items-center space-x-6">
                    <Link href="/cart">
                        <img className="max-h-5" src="/carticon.png" alt="" />
                    </Link>
                    <Link href="/signin">
                        <button className="px-5 py-1.5 bg-teal-700 text-white rounded-full hover:bg-teal-600">Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}


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
