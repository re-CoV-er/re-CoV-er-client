import { SIGN_UP } from "./actions";

const initialState = { activeUsers: ["default active user"] };

export const usersReducer = (state = initialState, action: any) => {
  if (action.type === SIGN_UP) {
    console.log("Payload of SIGN_UP action", action.payload);
    return { activeUsers: [...state.activeUsers, action.payload.username] };
  }
  return state;
};
