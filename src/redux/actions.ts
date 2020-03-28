export const SIGN_UP = "SIGN_UP";

export const signupUser = (username: string, password: string) => ({
  type: SIGN_UP,
  payload: { username, password },
});
