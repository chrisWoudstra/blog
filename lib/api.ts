export async function getPostBySlug(slug: string) {
    const res = await fetch(`${process.env.API_URL}/posts?slug=${slug}`, { next: { revalidate: 900 }})
    const data = await res.json();
    if (data.statusCode !== 200) {
        throw new Error('Failed to fetch posts');
    }
    return data.posts[0];
}

export async function getAllPosts() {
    const res = await fetch(`${process.env.API_URL}/posts?sort=asc&limit=10`, { next: { revalidate: 900 }})
    const data = await res.json();
    if (data.statusCode !== 200) {
        throw new Error('Failed to fetch posts');
    }
    return data.posts;
}
