import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-serif">
        The Blooms Bar
      </Link>

      <div className="flex gap-6 text-sm">
        <Link href="/gallery" className="hover:opacity-70">
          Gallery
        </Link>
        <Link href="/how-to-order" className="hover:opacity-70">
          How to Order
        </Link>
        <Link href="/contact" className="hover:opacity-70">
          Contact
        </Link>
      </div>
    </nav>
  );
}