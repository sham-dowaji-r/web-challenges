import Link from "next/link"; // استيراد Link من Next.js
import { introduction } from "@/lib/data"; // استيراد مقدمة الكتاب

export default function Home() {
  return (
    <main>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>

      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </main>
  );
}
