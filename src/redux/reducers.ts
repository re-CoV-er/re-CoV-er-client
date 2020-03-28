import { initialState } from '../App';
import { LOG_IN } from './actions';


export const usersReducer = (state = initialState, action: any) => {
    if (action.type === LOG_IN) {
        console.log('Payload of LOG_IN action', action.payload);
        return { activeUsers: [...state.activeUsers, action.payload.username] }
    }
    return state;
};