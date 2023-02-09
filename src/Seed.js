export const Posts = [
  {
    postId: '1',
    userId: '1',
    userName: 'Kiryl Misachenka',
    userAvatar: '/src/common/avatars/1.jpg',
    imageSrc: '/src/common/posts/firstPost.jpg',
    likes: 3,
    comments: [
      {
        userId: '3',
        userName: 'John Doe',
        comment: 'Cool!',
      },
      {
        userId: '2',
        userName: 'Elon Musk',
        comment: 'Would you mind if I used this picture?',
      },
    ],
    dateCreated: Date.now(),
  },
  {
    postId: '2',
    userId: '2',
    userName: 'Elon Musk',
    userAvatar: '/src/common/avatars/2.jpeg',
    imageSrc: '/src/common/posts/secondPost.jpeg',
    likes: 1,
    comments: [
      {
        userId: '1',
        userName: 'Kiryl Misachenka',
        comment: 'Amazing!',
      },
    ],
    dateCreated: Date.now(),
  },
];
