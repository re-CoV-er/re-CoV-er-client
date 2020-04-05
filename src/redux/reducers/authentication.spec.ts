import { authentication } from "./authentication";

describe("authentication", () => {
  it("should", () => {
    let state;
    state = authentication(
      { loading: true, loggedIn: false },
      { type: "LOG_IN_FAILURE" }
    );
    expect(state).toEqual({
      loading: false,
      loggedIn: false,
    });
  });
});
