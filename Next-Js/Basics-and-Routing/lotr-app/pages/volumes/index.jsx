import Link from "next/link"; // استيراد Link
import { volumes } from "@/lib/data"; // استيراد البيانات

export default function VolumeOverview() {
  return (
    <main>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
