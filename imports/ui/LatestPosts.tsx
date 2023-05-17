import React from 'react';
// @ts-ignore
import { useTracker } from 'meteor/react-meteor-data';
import { BlogPostsCollection } from "/imports/api/BlogPostsCollection";
import { TeaserLarge } from './TeaserLarge';

export const LatestPosts = () => {
    const posts : Array<object> = useTracker(() => BlogPostsCollection.find({}).fetch());
    return (
        <div className="latest-posts">
            <h2 className="latest-header">Latest</h2>
            <div>
                { posts.map(post => <TeaserLarge key={ post._id } post={ post }/>) }
            </div>
        </div>
    );
}