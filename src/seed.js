export const users = [
  {
    userId: '1',
    username: 'kiryl_misachenka',
    fullName: 'Kiryl Misachenka',
    avatar: '/kiryl_misachenka.jpg',
    emailAddress: 'kiryl@misachenka.dev',
    following: ['2'],
    followers: ['1'],
    dateCreated: Date.now(),
  },
  {
    userId: '2',
    username: 'vikulia_ryj',
    fullName: 'Viktoryia Ryzhkova',
    emailAddress: 'viktoryia@ryzhkova.dev',
    following: ['1'],
    followers: ['2'],
    dateCreated: Date.now(),
  },
];

export function getUserById(userId) {
  return users.find((user) => user.userId === userId);
}

export const posts = [
  {
    postId: '1',
    userId: '1',
    imageSrc: '/images/1.jpg',
    caption: 'Saint George and the Dragon',
    likes: ['2'],
    comments: [
      {
        userId: '2',
        comment: 'Would you mind if I used this picture?',
      },
    ],
    userLatitude: '40.7128°',
    userLongitude: '74.0060°',
    dateCreated: Date.now(),
  },
  {
    postId: '1',
    userId: '1',
    imageSrc: '/images/1.jpg',
    caption: 'Saint George and the Dragon',
    likes: ['2'],
    comments: [
      {
        userId: '2',
        comment: 'Would you mind if I used this picture?',
      },
    ],
    userLatitude: '40.7128°',
    userLongitude: '74.0060°',
    dateCreated: Date.now(),
  },
];
