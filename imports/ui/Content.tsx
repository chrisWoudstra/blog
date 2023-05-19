import React from 'react';
// @ts-ignore
import { useTracker } from 'meteor/react-meteor-data';
import { ContentCollection } from "/imports/api/ContentCollection";
import { ContentItem } from './ContentItem';

export const Content = () => {
    const contentArray : Array<object> = useTracker(() => ContentCollection.find({}).fetch());
    return (
        <div className="content">
            <h2 className="content-header">Content</h2>
            <table>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Created Date</td>
                </tr>
                </thead>
                <tbody>
                { contentArray.map(content => <ContentItem key={ content._id } content={ content }/>) }
                </tbody>
            </table>
        </div>
    );
}