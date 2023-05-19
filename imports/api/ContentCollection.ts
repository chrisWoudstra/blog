import { Mongo } from 'meteor/mongo';

export interface Content {
    _id?: string;
    type: string;
    title: string;
    teaserText: string;
    body: string;
    status: string;
    readTime: number;
    createdAt: Date;
}

export const ContentCollection = new Mongo.Collection('content');