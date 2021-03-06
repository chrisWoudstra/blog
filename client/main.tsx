import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';
import { Post } from '/imports/ui/Post';
import { Content } from '/imports/ui/Content';
import { AddContent } from "/imports/ui/AddContent";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/posts/:id',
    element: <Post/>
  },
  {
    path: '/admin/content',
    element: <Content/>
  },
  {
    path: "/admin/content/add",
    element: <AddContent/>
  }
]);

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container!);
  root.render(<RouterProvider router={router} />);
});
