import Link from 'next/link';
import { Button } from '../ui/button';

export function Navbar() {
  return (
    <div className="flex justify-between items-center w-full h-[100px] md:max-sm:px-2 py-4 bg-slate-100 px-40 shadow bg-blue-10/10">
      <Link href="/">
        <h2 className="font-bold text-xl">Warehouse</h2>
      </Link>
      <div className="flex space-x-4 items-baseline">
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
          <li>
            <Link href="/pricing">pricing</Link>
          </li>
        </ul>
        <Button
          className="border hover:border-blue-500 hover:cursor-pointer"
          variant="outline">
          Sign in
        </Button>
      </div>
    </div>
  );
}
