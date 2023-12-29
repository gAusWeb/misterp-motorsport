import fs from "fs";
import matter from "gray-matter";

export const GetPosts = () => {
  // get all md files from ./../blogs dynamically using their filename as the url slug and the file contents as the page content
  const posts = fs.readdirSync("./../blogs").map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMetadata = fs
      .readFileSync(`./../blogs/${filename}`)
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

  // return (
  //   <div>GetPosts</div>
  // )
};
