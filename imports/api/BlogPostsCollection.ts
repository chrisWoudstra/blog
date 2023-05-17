import { Mongo } from 'meteor/mongo';

export interface Post {
    _id?: string;
    title: string;
    teaserText: string;
    body: string;
    likes: number;
    createdAt: Date;
}

export const BlogPostsCollection = new Mongo.Collection('posts');