import React from 'react';

export const TeaserLarge = ({post}) => {

    const dateOptions = {
        month: 'short',
        day: 'numeric'
    }

    const publishedDate = (new Date(post.createdAt)).toLocaleDateString("en-US", dateOptions);
    return (
        <div className="teaser-lg">
            <div className="category-read-time">
                <div className="category">Category</div>
                <div className="read-time">4 min read</div>
            </div>
            <div>{ post.title }</div>
            <div>{publishedDate}</div>
            <div>{ post.teaserText}</div>
        </div>
    );
}