import { volumes } from "@/lib/data"; // استيراد البيانات
import Link from "next/link"; // استيراد Link
import Image from "next/image";

export default function VolumeDetail() {
  // هنا نبحث عن المجلد الذي يتطابق مع slug

  const currentSlug = "the-fellowship-of-the-ring";
  const currentIndex = volumes.findIndex((v) => v.slug === currentSlug);

  const volume = volumes[currentIndex];
  const previousVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  return (
    <main>
      <Link href="/volumes">← All Volumes</Link>{" "}
      {/* رابط العودة للصفحة الرئيسية */}
      <h1>{volume.title}</h1> {/* عرض عنوان المجلد */}
      <p>{volume.description}</p> {/* عرض الوصف */}
      <h2>Books in this Volume</h2>
      <ul>
        {/* عرض الكتب الموجودة في هذا المجلد */}
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}. {book.title} {/* رقم الكتاب وعنوانه */}
          </li>
        ))}
      </ul>
      {/* 📘 cover image*/}
      <Image
        src={volume.cover}
        alt={`Cover of ${volume.title}`}
        width={140}
        height={230}
      />
      {/* Previous/Next Links */}
      <nav style={{ marginTop: "2rem" }}>
        {previousVolume && (
          <button>
            {" "}
            <Link href={`/volumes/${previousVolume.slug}`}>
              ← {previousVolume.title}
            </Link>
          </button>
        )}{" "}
        {nextVolume && (
          <button>
            {" "}
            <Link href={`/volumes/${nextVolume.slug}`}>
              {nextVolume.title} →
            </Link>
          </button>
        )}
      </nav>
    </main>
  );
}
