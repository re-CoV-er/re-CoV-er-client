import { LOG_IN } from "./actions";

const initialState = { activeUsers: ["default active user"] };

export const usersReducer = (state = initialState, action: any) => {
  if (action.type === LOG_IN) {
    console.log("Payload of LOG_IN action", action.payload);
    return { activeUsers: [...state.activeUsers, action.payload.username] };
  }
  return state;
};
