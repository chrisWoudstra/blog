export interface Post {
    id: number;
    title: string;
    teaser: string;
    teaser_image: string;
    header_image: string;
    content: string;
    publishedDate?: Date;
    updatedDate?: Date;
}