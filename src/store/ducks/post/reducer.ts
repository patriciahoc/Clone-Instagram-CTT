import { Post, PostTypes } from "./types";

const initialStatePosts: Post[] = [];

function reducerPosts(state = initialStatePosts, action: any) {
  switch (action.type) {
    case PostTypes.GET_POST:
      return [...action.payload];

    default:
      return state;
  }
}
export default reducerPosts;
