import Link from "next/link";

export default function Navbar() {
  return (
   <nav>
    <ul className="flex items-center justify-between py-5 px-5 bg-slate-500 h-6 text-white">
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/contacts'><li>Contact</li></Link>
    </ul>
   </nav>
  )
}
