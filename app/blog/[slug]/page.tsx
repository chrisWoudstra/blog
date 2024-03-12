import { notFound } from "next/navigation";
import {getAllPosts, getPostBySlug} from "@/lib/api";
// import markdownToHtml from "@/lib/markdownToHtml";
import {Post} from "@/app/global";

export default async function Post({ params }: Params) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    // const content = await markdownToHtml(post.content || "");

    return (
        <main className="big-class">
            <h1 className="mt-28 text-center">{post.title}</h1>
            <p>{post.content}</p>
        </main>
    );
}

type Params = {
    params: {
        slug: string;
    };
};
export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post: Post) => ({
        slug: post.slug,
    }));
}