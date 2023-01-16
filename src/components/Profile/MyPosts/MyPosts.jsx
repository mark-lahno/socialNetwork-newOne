import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = () => {
  return <div>
    <textarea></textarea>
    <button>Add post</button>
    <div>

      New Post
    </div>
    <div className={classes.post}>
      <Post message="Hi, how are you?" likeCount="15" />
      <Post message="It's my first post" likeCount="20" />
    </div>
  </div>;
}

export default MyPosts;