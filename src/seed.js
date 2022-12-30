export const posts = [
  {
    postId: '1',
    userId: '1',
    userName: "Kiry; Misachenka",
    imageSrc: '/1.jpg',
    likes: 3,
    comments: [
      {
        userId: '3',
        userName: "John Doe",
        comment: 'Cool!',
      },
      {
        userId: '2',
        userName: "Elon Musk",
        comment: 'Would you mind if I used this picture?',
      },
    ],    
    dateCreated: Date.now(),
  },
  {
    postId: '2',
    userId: '1',
    userName: "Elon Musk",
    imageSrc: '/2.jpg',
    likes: 1,
    comments: [
      {
        userId: '1',
        userName: "Kiryl Misachenka",
        comment: 'Amazing!',
      },
    ],    
    dateCreated: Date.now(),
  },
];
