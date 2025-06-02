import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <h1>Next.js Routing & Page Rendering</h1>
      <ul className="news-list">
        <li>
          <Link href="/news">News Overview</Link>
        </li>
        <li>
          <Link href="/news/more">More News</Link>
        </li>
        <li>
          <Link href="/news/still_more">Even More News</Link>
        </li>
      </ul>
    </div>
  );
}
