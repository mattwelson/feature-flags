import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export function PageHeader() {
  return (
    <header className="grid grid-cols-layout [&>*]:col-start-2 sticky top-0 bg-white py-4 shadow-md mb-8">
      <div className="flex justify-between items-center opacity-70 hover:opacity-100 transition">
        <div className="text-lg">
          <Link href="/">
            Feature<b>Flags</b>
          </Link>
        </div>
        <a
          href="https://github.com/mattwelson/feature-flags"
          target="_blank"
          rel="nofollower"
          className="text-4xl opacity-70 hover:opacity-100 transition"
        >
          <FaGithub />
        </a>
      </div>
      <Separator className="my-2" />
      <div>
        <Link href="/">Overview</Link>
      </div>
    </header>
  );
}
