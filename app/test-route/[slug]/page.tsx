import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  // async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(
    "https://raw.githubusercontent.com/gAusWeb/misterp-motorsport/main/app/blogs/2nd-blog.md"
  );
  const markdown = await res.text();
  return <MDXRemote source={markdown} />;
  // }

  // return <div>My Post: {params.slug}<br /></div>;
}
