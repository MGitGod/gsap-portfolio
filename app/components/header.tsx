import Link from "next/link"

export default function Header() {
  return (
    <nav className="flex flex-row items-center h-14 px-4 border-b border-gray-200/50 backdrop-filter backdrop-blur-sm/20 dark:border-gray-800/50 dark:bg-gray-950/75">
      <div className="flex items-center mr-4 text-lg font-semibold">
        <Link className="flex items-center gap-2 text-base font-semibold" href="#">
          {/* <PackageIcon className="h-6 w-6" /> */}
          <span>moto.dev PlayGround</span>
        </Link>
      </div>
      <div className="flex-1" />
      <div className="flex items-center space-x-4">
        <Link className="font-medium transition-colors" href="#">
          Home
        </Link>
        <Link href={"scroll"} className="font-medium transition-colors">
          Scroll
        </Link>
        <Link href="#" className="font-medium transition-colors">
          Hover
        </Link>
        <Link className="font-medium transition-colors" href="#">
          Slide
        </Link>
        <Link className="font-medium transition-colors" href="#">
          Click
        </Link>
      </div>
    </nav>
  )
}

// function PackageIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   )
// }
