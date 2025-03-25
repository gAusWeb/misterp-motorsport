import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import "./../../components/mosaic-blog.scss";

export default async function Page({ params }: { params: { slug: string } }) {
  // async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // console.log(params.slug);
  // const test = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/gAusWeb/misterp-motorsport/main/app/blogs/${params.slug}.md`
    // `https://github.com/gAusWeb/misterp-motorsport/blob/main/app/blogs/${params.slug}.md`
  );
  // .then((response) => response.text());
  // .then(result => document.getElementById('content').innerHTML = marked(result));
  const markdown = await res.text();
  console.log("md", markdown);

  const { content, frontmatter } = await compileMDX<{
    title: string;
    coverImage: string;
  }>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  const myLoader = () => {
    return `${frontmatter.coverImage}`;
  };
  return (
    <>
      <Link
        href="/blogs"
        className="bg-blue-500 inline-block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Blogs
      </Link>
      <h1>{frontmatter.title}</h1>
      <Image
        src={myLoader()}
        alt="test"
        width={1150}
        height={680}
        loading="lazy"
      />
      {content}
    </>
  );

  // console.log("yoyoyoyoyo", typeof markdown);
  // return <MDXRemote source={markdown} />;
  // return markdown;
  // }

  // const { data, content } = matter(markdown.toString());
  // const frontmatter = {
  //   ...data,
  //   // slug,
  // };
  // // console.log("My YO", frontmatter);
  // // console.log("YO YO", content);

  // return {
  //   frontmatter,
  //   content,
  // };

  // return <MDXRemote source={test} />;
  // return test;
  // };

  // console.log("hi", test().frontmatter);

  return (
    <div>
      My Post: <br />
    </div>
  );
}
