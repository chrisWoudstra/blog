import { Meteor } from 'meteor/meteor';
import { Post, BlogPostsCollection } from "/imports/api/BlogPostsCollection";

async function insertPost({ title, teaserText, body }: Pick<Post, 'title' | 'teaserText' | 'body'>) {
  await BlogPostsCollection.insertAsync({ title, teaserText, body, createdAt: new Date() });
}

Meteor.startup(async () => {
  BlogPostsCollection.remove({});
  // If the Links collection is empty, add some data.
  if (await BlogPostsCollection.find().countAsync() === 0) {
    await insertPost({
      title: 'Blog Post 1',
      teaserText: 'This is some teaser text but not the full post!',
      body: 'This is the first blog post.',
    });

    await insertPost({
      title: 'Blog Post 2',
      teaserText: 'This is some teaser text but not the full post!',
      body: 'This is the second post.',
    });

    await insertPost({
      title: 'Blog Post 3',
      teaserText: 'This is some teaser text but not the full post!',
      body: 'Third post.',
    });
  }

  // We publish the entire Posts collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("posts", function () {
    return BlogPostsCollection.find();
  });
});
