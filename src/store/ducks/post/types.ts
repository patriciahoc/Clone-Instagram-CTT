export enum PostTypes {
  GET_POST = "@GET_POST",
 
}
export interface Post {
  id: number;
  user: string;
  userPicture: string;
  postPicture: string;
  description: string;
  likes: number;
  location: string;
}
