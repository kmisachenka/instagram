import React from 'react';
import Post from './components/Post.jsx';

function App() {
  return (
    <div className="m-w-[790px] mx-auto mt-4 flex lg:max-w-[854px]">
      <section className="mx-auto w-[100vw] max-w-[470px]">
        {/*Stories*/}
        <Post />
      </section>
      <section className="mx-8 hidden w-full max-w-[320px] lg:block"></section>
    </div>
  );
}

export default App;
