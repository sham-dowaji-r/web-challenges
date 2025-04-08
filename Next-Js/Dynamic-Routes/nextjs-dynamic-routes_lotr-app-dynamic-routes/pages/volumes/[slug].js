import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data"; // استيراد البيانات
import { useRouter } from "next/router"; // لاستيراد useRouter

export default function VolumeDetail() {
  const router = useRouter(); // استخدام useRouter للوصول إلى الـ slug
  const { slug } = router.query; // الحصول على الـ slug من الرابط

  // البحث عن المجلد بناءً على الـ slug
  const volume = volumes.find((volume) => volume.slug === slug);

  // إذا لم يوجد المجلد، يتم عرض null
  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      <div>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        ) : null}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : null}
      </div>
    </>
  );
}
