"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Scroll", href: "/scroll" },
  { id: 3, name: "Rotate", href: "/rotate" },
  { id: 3, name: "Zoom", href: "/zoom" },
  { id: 4, name: "Trigger", href: "/trigger" },
];

const joinStr = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row items-center h-14 px-4 border-b border-gray-200/50 backdrop-filter backdrop-blur-sm/20 dark:border-gray-800/50 dark:bg-gray-950/75">
      <div className="flex items-center mr-4 text-lg font-semibold">
        <Link
          className="flex items-center gap-2 text-base font-semibold"
          href="#"
        >
          <span>moto.dev PlayGround</span>
        </Link>
      </div>
      <div className="flex-1" />
      <div className="flex items-center space-x-4">
        {navigation.map(({ href, name }) => (
          <Link
            href={href}
            key={name}
            className={joinStr(
              pathname === href
                ? "text-[#0ae448]"
                : "text-[#9b9b9b] hover:text-[#bebebe]",
              "block pl-[20px] "
            )}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

// import Link from "next/link"

// export default function Header() {
//   return (
//     <nav className="flex flex-row items-center h-14 px-4 border-b border-gray-200/50 backdrop-filter backdrop-blur-sm/20 dark:border-gray-800/50 dark:bg-gray-950/75">
//       <div className="flex items-center mr-4 text-lg font-semibold">
//         <Link className="flex items-center gap-2 text-base font-semibold" href="#">
//           {/* <PackageIcon className="h-6 w-6" /> */}
//           <span>moto.dev PlayGround</span>
//         </Link>
//       </div>
//       <div className="flex-1" />
//       <div className="flex items-center space-x-4">
//         <Link className="font-medium transition-colors" href="#">
//           Home
//         </Link>
//         <Link href={"scroll"} className="font-medium transition-colors">
//           Scroll
//         </Link>
//         <Link href="#" className="font-medium transition-colors">
//           Hover
//         </Link>
//         <Link className="font-medium transition-colors" href="#">
//           Slide
//         </Link>
//         <Link className="font-medium transition-colors" href="#">
//           Click
//         </Link>
//       </div>
//     </nav>
//   )
// }
