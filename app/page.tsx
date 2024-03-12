import {Post} from "@/app/global";
import Link from "next/link";
import {getAllPosts} from "@/lib/api";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="m-10 w-1/5">
        <select className="border p-3 w-full">
          <option className="w-full" value="1">Latest</option>
          <option value="2">Category</option>
        </select>
      </div>
      {posts.map((post: Post) => (
          <div key={post.id} className="w-2/5 rounded overflow-hidden shadow-lg mb-10">
            <Link href={"/blog/" + post.slug}>
              <img className="w-full" src={`${process.env.S3_ASSET_URL}/teaser_images/${post.teaser_image}`} alt={post.title}/>
              <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.teaser}</p>
              </div>
            </Link>
            <div className="px-6 pt-4 pb-2">
              <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray=700 mr-2 mb-2">Some Thing</span>
              <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray=700 mr-2 mb-2">Other Thing</span>
              </div>
            </div>
        ))}
    </main>
  );
}
