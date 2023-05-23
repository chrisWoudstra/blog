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
            <table id="content-table">
                <thead>
                <tr>
                    <td></td>
                    <td>Type</td>
                    <td>Title</td>
                    <td>Created</td>
                    <td>Published</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                { contentArray.map((content, index) => <ContentItem key={ content._id } index={index} content={ content }/>) }
                </tbody>
            </table>
        </div>
    );
}