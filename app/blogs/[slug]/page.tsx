// import GetPost to get the blog posts via next js url routing

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
  content: string;
}

export default function GetPosts({ params }: { params: any }) {
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

  // posts.forEach((post) => {
  //   post?.slug && console.log("post", post?.slug);
  // });

  return (
    <div>
      <Link
        href="/blogs"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Blogs
      </Link>
      <br />
      <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          {posts.map(
            (el: any) =>
              el &&
              // el.slug && (
              el.slug == params.slug && (
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
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md group-hover:underline dark:text-gray-100"
                    >
                      {el.frontmatter.title}
                    </a>
                  </h2>
                </div>
              )
          )}
        </div>
      </div>
      {/* <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500"
            style={{
              backgroundImage:
                "url(https://www.litchfieldmotors.com/wp-content/uploads/porsche_991_gt3rs_dyno.jpg)",
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
                <span className="text-3xl font-semibold leadi tracki">31</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100"
              >
                Fuga ea ullam earum assumenda, beatae labore eligendi.
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
            style={{
              backgroundImage:
                'url("https://s19533.pcdn.co/wp-content/uploads/2021/03/Dyno-Options-Feature.jpg")',
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
                <span className="text-3xl font-semibold leadi tracki">04</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline dark:text-gray-100"
              >
                {" "}
                Autem sunt tempora mollitia magnam non voluptates
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
            style={{
              backgroundImage:
                'url("https://www.rspmotorsports.com/wp-content/uploads/2022/04/RSP-Blog-DynoTuning-Inner.jpg")',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
              >
                Turbo Upgrade
              </a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">01</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline dark:text-gray-100"
              >
                Inventore reiciendis aliquam excepturi
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
            style={{
              backgroundImage:
                'url("https://www.streetmachine.com.au/wp-content/uploads/2023/07/holden-vl-calais.jpg")',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
              >
                Full Rebuild
              </a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">28</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline dark:text-gray-100"
              >
                Officiis mollitia dignissimos commodi optio vero animi
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
            style={{
              backgroundImage:
                'url("https://carsales.pxcrush.net/carsales/car/dealer/45a58c67abfd3388e92662fe9c1e8e92.jpg?pxc_method=fit&pxc_size=1795%2c1195 ")',
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
                <span className="text-3xl font-semibold leadi tracki">19</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline dark:text-gray-100"
              >
                Doloribus sit illo necessitatibus architecto exercitationem enim
              </a>
            </h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}
