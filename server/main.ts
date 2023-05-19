import { Meteor } from 'meteor/meteor';
import { Post, ContentCollection } from "/imports/api/ContentCollection";

async function insertPost({ type, title, teaserText, body, status }: Pick<Post, 'type' | 'title' | 'teaserText' | 'body' | 'status'>) {
  await ContentCollection.insertAsync({ type, title, teaserText, body, status, createdAt: new Date() });
}

Meteor.startup(async () => {
  ContentCollection.remove({});
  // If the Links collection is empty, add some data.
  if (await ContentCollection.find().countAsync() === 0) {
    await insertPost({
      type: 'Blog',
      title: 'Blog Post 1',
      teaserText: 'This is some teaser text but not the full post!',
      body: 'This is the first blog post.',
      status: 'Published'
    });

    await insertPost({
      type: 'Blog',
      title: 'Blog Post 2',
      teaserText: 'This is some teaser text but not the full post!',
      body: 'This is the second post.',
      status: 'Published'
    });

    await insertPost({
      type: 'Story',
      title: 'Story 1',
      teaserText: 'This is some teaser text but not the full story!',
      body: 'First story is the deepest.',
      status: 'Published'
    });
  }

  // We publish the entire Posts collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("posts", function () {
    return ContentCollection.find();
  });
});
