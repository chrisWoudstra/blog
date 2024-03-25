import {Post} from "@/app/global";
import {getAllPosts} from "@/lib/api";
import TeaserCard from "@/app/components/TeaserCard";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
    <h1 className="text-2xl font-bold m-10">Latest</h1>
      {posts.map((post: Post) => (
          <TeaserCard key={post.id} post={post}/>
        ))}
    </main>
  );
}
