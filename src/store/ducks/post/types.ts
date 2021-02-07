export enum PostTypes{
  GET_USUARIO = '@GET_USUARIO',
  POST_POSTS = '@POST_POST',
  PATCH_STORIES = '@PATCH_STORIES'
}
export interface Post {
  arrayPosts: PostItem[];
}

export interface PostItem {
  id: number;
  user: string;
  userPicture: string;
  postPicture: string;
  description: string;
  likes: number;
}
