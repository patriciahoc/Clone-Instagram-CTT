import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import reducerStories from "./ducks/stories/reducer";
import reducerUser from "./ducks/user/reducer";
import reducerPosts from "./ducks/post/reducer"


const createRootReducer = () =>
  combineReducers({
    usuario: reducerUser,
    stories: reducerStories,
    posts: reducerPosts,
   
  });

const store = createStore(createRootReducer(), composeWithDevTools());

export { store };
