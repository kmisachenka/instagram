import React from 'react';
import Comment from './Comment.jsx';

const Post = () => {
  return (
    <div className="">
      <div className="my-3 rounded-lg border">
        <div className="flex items-center p-3">
          <div className="flex w-full items-center">
            <div className="mr-3 h-8 w-8">
              <img className="rounded-full" src="/kiryl_misachenka.jpg" />
            </div>
            <div className="text-sm font-semibold">
              <p>Username</p>
            </div>
          </div>
        </div>
        <div>
          <img src="https://media.nga.gov/iiif/fdb293a6-1424-412c-a7b6-8addde46aa55/full/full/0/default.jpg?attachment_filename=saint_george_and_the_dragon_1937.1.26.jpg" />
        </div>
        <div className="m-3">
          <div>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 shrink cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 shrink cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 shrink cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 shrink cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2 text-sm font-bold leading-[18px]">
              <p>9 likes</p>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <p className="mr-2 whitespace-nowrap text-sm font-bold leading-[18px]">
              kiryl_misachenka
            </p>
            <p className="truncate">Saint George and the Dragon</p>
          </div>
          <div>
            <div className="flex items-center truncate">
              <Comment
                nickName="vikulia_ryj"
                text="Would you mind if I used this picture?"
              />
            </div>
          </div>
          <p className="my-2 text-xs text-gray-400">22 hours ago</p>
          <div className="-mx-3 my-3 border-t"></div>
          <form className="flex justify-between p-1">
            <div className="flex">
              <input
                type="text"
                placeholder="Add a comment..."
                className="text-gray-base w-full text-sm outline-0"
              />
            </div>
            <button className="text-sm font-bold text-[#0095f6]">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
