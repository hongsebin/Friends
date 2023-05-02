import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

// 유저
export const users = [
  {
    _id: userIds[0],
    firstName: "Sungjin",
    lastName: "Park",
    email: "psj@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "user_psj.jpg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Dancer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Brian",
    lastName: "Kang",
    email: "kyh@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "user_kyh.jpg",
    friends: [],
    location: "Canada, TO",
    occupation: "Bassist",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Wonpil",
    lastName: "Kim",
    email: "kwp@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "user_kwp.jpg",
    friends: [],
    location: "New York, CA",
    occupation: "Singer",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Dowoon",
    lastName: "Yoon",
    email: "ydw@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "user_ydw.jpg",
    friends: [],
    location: "Chicago, IL",
    occupation: "Drummer",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
];

// 게시물
export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Sungjin",
    lastName: "Park",
    location: "an Fran, CA",
    description: "Dance is my life",
    picturePath: "post_psj.png",
    userPicturePath: "user_psj.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "random comment 1",
      "random comment 2",
      "random comment 3",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Brian",
    lastName: "Kang",
    location: "Canada, TO",
    description:
      "Today's dinner🕺🏻",
    picturePath: "post_kyh.png",
    userPicturePath: "user_kyh.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
    ]),
    comments: [
      "random comment 1",
      "random comment 2",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Wonpil",
    lastName: "Kim",
    location: "New York, CA",
    description:
      "I LOVE MY COUNTRY :)",
    picturePath: "post_kwp",
    userPicturePath: "user_kwp.jpg",
    likes: new Map([
      [userIds[0], true],
    ]),
    comments: [
      "random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Dowoon",
    lastName: "Yoon",
    location: "Chicago, IL",
    description:
      "I want to go camping.",
    picturePath: "post_ydw.png",
    userPicturePath: "user_ydw.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "random comment",
      "random comment",
      "random comment",
      "random comment",
    ],
  },
];