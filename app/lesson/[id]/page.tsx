"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LessonPage() {
  const params = useParams();
  const id = params.id; // This is the value of "i + 1" from the link

  return (<>
  <div>Lesson ID: {id}</div>;
    <Link href={`/`} className="lsnbtn">back to home</Link>

  </> )
}