import fs from "fs";
import matter from "gray-matter";

export default function Page({ params }: { params: { slug: string } }) {
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
  return <div>My Post: {params.slug}</div>;
}
