import { User, UserTypes } from "../user/types";

const initialStateUser: User = {
  name: "",
  username: "",
  userPicture: "",
};

function reducerUser(state = initialStateUser, action: any) {
  switch (action.type) {
    case UserTypes.GET_USER:
      
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        userPicture: action.payload.userPicture
      };

    default:
      return state;
  }
}

export default reducerUser;
