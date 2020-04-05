import { of } from "rxjs";
import { loginEpic } from "./login";
import { LOG_IN } from "../constants";
import { LogInAction } from "../action-creators/authentication";
import { EpicDependencies } from "../store";
import { toArray } from "rxjs/operators";

describe("login epic", () => {
  it("should return a LOG_IN_SUCCESS action if response contains token", () => {
    const mockResponse = { data: { logIn: { accessToken: "02092jd3" } } };
    const action = of<LogInAction>({
      type: LOG_IN,
      payload: {
        username: "mac_mustermann",
        password: "secret*password",
      },
    });
    const dependencies: EpicDependencies = {
      client: {
        query: () => Promise.resolve(mockResponse),
      },
    } as any;

    const result = loginEpic(action as any, null as any, dependencies).pipe(
      toArray()
    );

    result.subscribe((actions) => {
      expect(actions).toEqual([
        {
          type: "LOG_IN_SUCCESS",
          payload: {
            accessToken: mockResponse.data.logIn.accessToken,
          },
        },
      ]);
    });
  });
});
