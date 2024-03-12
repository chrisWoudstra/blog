export interface Post {
    id: number;
    title: string;
    slug: string;
    teaser: string;
    teaser_image: string;
    header_image: string;
    content: string;
    publishedDate?: Date;
    updatedDate?: Date;
}