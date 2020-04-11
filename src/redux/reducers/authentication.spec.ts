import { authentication } from './authentication';

describe('authentication', () => {
  it('should', () => {
    const previousState = { loading: true, loggedIn: false };
    const action = { type: 'LOG_IN_FAILURE' };
    const state = authentication(previousState, action);
    expect(state).toEqual({
      loading: false,
      loggedIn: false,
    });
  });
});
