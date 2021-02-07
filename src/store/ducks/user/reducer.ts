import { User, UserTypes } from "../user/types";

const initialStateUser: User = {
  name: "",
  username: "",
  userPicture: "",
};

function reducerUser(state = initialStateUser, action: any) {
  switch (action.type) {
    case UserTypes.GET_USER:
      console.log(action.payload);
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
}

export default reducerUser;
