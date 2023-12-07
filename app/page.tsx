import Image from "next/image";
import { lusitana } from "./fonts/fonts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <main className="flex min-h-screen  flex-col p-6">
      <nav>
        <h2>Welcome to Musica</h2>

        <Link href="/dashboard">
          <button>dashboard</button>
        </Link>
      </nav>
    </main>
  );
}
