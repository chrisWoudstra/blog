import React from 'react';

export const ContentItem = ({ content, index }) => {

    const dateOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }

    const createdDate = (new Date(content.createdAt)).toLocaleDateString("en-US", dateOptions);
    return (
        <tr>
            <td>{ index + 1}</td>
            <td>{ content.type }</td>
            <td>{ content.title }</td>
            <td>{ createdDate }</td>
            <td>{ createdDate }</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    );
}