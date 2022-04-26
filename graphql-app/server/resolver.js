const { POSTS } = require('./data');

const mapPost = (post, id) => post && ({ id, ...post });
const postRoot = {
    posts: () => POSTS.map(mapPost),
    post: ({ id }) => mapPost(POSTS[id], id),
};

module.exports = {
    postRoot,
}