

export const LOG_IN = 'LOG_IN';

export const loginUser = (username: string, password: string) => ({
    type: LOG_IN,
    payload: {username, password}
})