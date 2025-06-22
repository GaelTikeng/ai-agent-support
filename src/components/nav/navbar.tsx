import Link from 'next/link';
import { Button } from '../ui/button';

export function Navbar() {
  return (
    <div className="flex justify-between items-center w-full h-[62px] md:max-sm:px-2 py-4 bg-slate-200 px-20 shadow bg-blue-10/10">
      <Link href="/">
        <h2 className="">Warehouse</h2>
      </Link>
      <nav className="">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Button className="">Get started</Button>
    </div>
  );
}
