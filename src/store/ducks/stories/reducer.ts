import { StoriesTypes, Story } from "./types";

const initialStateStories: Story[] = [];

function reducerStories(state = initialStateStories, action: any) {
  switch (action.type) {
    case StoriesTypes.GET_STORIES:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export default reducerStories;
