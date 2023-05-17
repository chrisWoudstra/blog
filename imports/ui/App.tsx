import React from 'react';
import { AddPost } from './AddPost';
import { LatestPosts } from "/imports/ui/LatestPosts";

export const App = () => {
    return (
        <div className="app-container">
            <AddPost/>
            <LatestPosts/>
        </div>
    );
}
