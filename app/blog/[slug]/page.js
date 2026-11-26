import Link from "next/link";

export default function BlogPostPage({ params }) {
  return (
    <main>
      <p>
        <Link href="/blog">The Blog</Link>
      </p>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
