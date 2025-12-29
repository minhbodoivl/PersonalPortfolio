import Link from "next/link";

export default function Navbar()
{
    return (
        <nav className="p-4 border-b">
            <Link href="/" className="mr-4">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}