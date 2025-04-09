/*import { volumes } from "../../lib/data"; // استيراد البيانات
import Link from "next/link"; // استيراد Link من Next.js
import { useRouter } from "next/router"; // لاستيراد useRouter

// للحصول على عنصر عشوائي من المصفوفة
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter(); // استخدام useRouter للوصول إلى الـ slug

  // دالة للتنقل إلى مجلد عشوائي
  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes); // الحصول على مجلد عشوائي
    router.push(`/volumes/${randomVolume.slug}`); // التنقل إلى صفحة المجلد العشوائي
  };

  return (
    <div>
      <h1>The Lord of the Rings</h1>
      <button onClick={handleRandomVolume}>Go to Random Volume</button>{" "}
      {/* زر المجلد العشوائي */
//<ul>
// {/* قائمة بالمجلدات */}
//{volumes.map((volume) => (
//<li key={volume.slug}>
// <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>{" "}
//  {/* روابط المجلدات */}
// </li>
// ))}
// </ul>
//</div>
//);
//}
import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
