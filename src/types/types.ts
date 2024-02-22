export type UserObjType = {
  email: string;
  password: string;
};

export type PostObj = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type DummyResponseType = {
  posts: DummyPostType[];
  total: number;
  skip: number;
  limit: number;
};

export type DummyPostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};
// type TagsListProps = {
//   list: DummyPostType['tags'];
// };
