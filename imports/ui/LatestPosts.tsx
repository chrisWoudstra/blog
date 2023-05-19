import React from 'react';
// @ts-ignore
import { useTracker } from 'meteor/react-meteor-data';
import { ContentCollection } from "/imports/api/ContentCollection";
import { TeaserLarge } from './TeaserLarge';

export const LatestPosts = () => {
    const publishedContent = useTracker(() => ContentCollection.find({status: 'Published'}).fetch());
    return (
        <div className="latest-posts">
            <h2 className="latest-header">Latest</h2>
            <div>
                { publishedContent.map(content => <TeaserLarge key={ content._id } content={ content } />) }
            </div>
        </div>
    );
}