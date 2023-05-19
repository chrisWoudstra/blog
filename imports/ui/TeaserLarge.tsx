import React from 'react';

export const TeaserLarge = ({ content }) => {

    const dateOptions = {
        month: 'short',
        day: 'numeric'
    }

    const publishedDate = (new Date(content.createdAt)).toLocaleDateString("en-US", dateOptions);
    return (
        <div className="teaser-lg">
            <div className="category-read-time">
                <div className="category">{ content.type }</div>
                <div className="read-time">{ !content.readTime } min read</div>
            </div>
            <div>{ content.title }</div>
            <div>{ publishedDate }</div>
            <div>{ content.teaserText }</div>
        </div>
    );
}