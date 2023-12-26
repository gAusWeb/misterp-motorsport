export default function BlogDetails({
  params,
}: {
  params: { blogId: number | string };
}) {
  return <h1>Blog Details Page {params.blogId}</h1>;
}
