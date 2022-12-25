import React from "react";
import Comment from "./Comment.jsx";

const Post = () => {
    return (
        <div class="max-w-md bg-white border-2 border-solid border-slate-200 rounded-lg mb-6">
            <div>
                <div class="flex items-start px-2 py-2">
                    <img
                        class="inline-block h-10 w-10 rounded-full ring-2 ring-white mr-1"
                        src="https://cdn.myanimelist.net/images/characters/12/450359.jpg"
                        alt="Avatar"/>
                    <div>
                        <h3>Username</h3>
                    </div>
                </div>
            </div>
            <img
                class="object-contain"
                src="https://erinlawless.files.wordpress.com/2013/04/george1.jpg"/>
            <div class='flex p-{10px}'>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
                <i className="far fa-bookmark"></i>
            </div>
            <div>
                <h4
                    class="font-normal p-2">
                    <strong>User</strong> Saint George and the Dragon</h4>
            </div>
            <div>
                <Comment text="Would you mind if I used this picture?" nickName="vikulia_ryj"/>
                <Comment text="Saint George and the Dragon" nickName="kiryl_misachenka"/>
            </div>
            <div class="flex mt-1 border-1">
                <form>
                    <input
                        class="flex-initial w-96 p-2 border-none"
                        placeholder="Add a comment..."
                    />
                    <button
                        class="flex-initial border-none pl-2"
                        type="submit"
                    >
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Post;