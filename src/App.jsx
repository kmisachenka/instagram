import React from 'react';
import Post from './components/Post.jsx';
import { Posts } from './Seed.js';

function App(props) {
  return (
    <div className="m-w-[790px] mx-auto mt-4 flex lg:max-w-[854px]">
      <section className="mx-auto w-[100vw] max-w-[470px]">
        {/*Stories*/}
        {Posts.map((post) => (
          <Post
            key={post.postId}
            post={post}
            name={post.userName}
            avatar={post.userAvatar}
            postPicture={post.imageSrc}
            likesCount={post.likes}
            created={post.dateCreated}
          />
        ))}
      </section>
      <section className="mx-8 hidden w-full max-w-[320px] lg:block"></section>
    </div>
  );
}

export default App;
