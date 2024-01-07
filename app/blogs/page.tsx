// // import Content from "./jnklj.mdx";
// // import BlogDetails from './[blog-id]/page';

// import fs from "fs";
// import path from "path";
// import ContentDisplay from "./ContentDisplay";

// const DynamicPage = ({ content }: { content: any }) => {
//   <div>
//     <h1>Your Dynamic Content</h1>
//     <ContentDisplay content={content} />
//   </div>;
// };

// export async function getStaticPaths() {
//   const files = fs.readdirSync("app/blogs");
//   console.log("files", files);
//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: any }) {
//   const filePath = fs.readFileSync(path.join(`app/blogs`, `${params.slug}.md`));
//   const content = fs.readFileSync(filePath, "utf8");
//   return { props: { content } };
// }

// export default DynamicPage;

// import GetPost to get the blog posts via next js url routing

import fs from "fs";
import matter from "gray-matter";
// import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
// import { MDXRemote } from 'next-mdx-remote/rsc'

// async function RemoteMdxPage() {
//   // MDX text - can be from a local file, database, CMS, fetch, anywhere...
//   const res = await fetch('https://...')
//   const markdown = await res.text()
//   return <MDXRemote source={markdown} />
// }

export default async function GetPosts({ params }: { params: any }) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const getPageBlogContent = async (slug: any) => {
  //   "use server";
  //   const res = await fetch(
  //     `https://github.com/gAusWeb/misterp-motorsport/blob/main/app/blogs/${slug}.md`
  //   );
  //   const markdown = await res.text();
  //   const processedMarkdown = <MDXRemote source={markdown} />;
  //   return processedMarkdown;
  // };

  // get all md files from ./../blogs dynamically using their filename as the url slug and the file contents as the page content
  const posts = fs.readdirSync("./app/blogs").map((filename) => {
    if (filename.split(".").pop() !== "md" && filename !== undefined) return;
    const slug = filename.replace(".md", "");
    const markdownWithMetadata = fs
      .readFileSync(`./app/blogs/${filename}`)
      .toString();
    const { data, content } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
      slug,
    };
    return {
      slug,
      frontmatter,
      content,
    };
  });

  return (
    <div>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Home
      </Link>
      <br />
      <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:grid-rows-2">
          {posts.map(
            (el: any) =>
              el &&
              el.slug && (
                // el.slug == params.slug && (
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
                  style={{
                    backgroundImage: `url(${el.frontmatter.coverImage})`,
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                    >
                      Dyno Tune
                    </a>
                    <div className="flex flex-col justify-start text-center dark:text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        04
                      </span>
                      <span className="leadi uppercase">Aug</span>
                    </div>
                  </div>
                  <h4 className="z-10 p-5">
                    {/* <button onClick={() => getPageBlogContent(el.slug)}>
                      {el.frontmatter.title}
                    </button> */}
                    <Link href={`/blogs/${el.slug}`}>
                      {/* <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md group-hover:underline dark:text-gray-100"
                    > */}
                      {el.frontmatter.title}
                      {/* </a> */}
                    </Link>
                  </h4>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
