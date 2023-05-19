import React from 'react';

export const ContentItem = ({ content }) => {
    console.log(content);
    return (
        <tr>
            <td>{ content.title }</td>
            <td>{ content.status }</td>
        </tr>
    );
}