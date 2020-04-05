import { AuthenticationState } from "../redux/reducers/authentication";

export class PersistState<State = { authentication: AuthenticationState }> {
  constructor(private readonly strategy: LocalStrategy) {}
  public loadState = () => {
    try {
      const serializedState = this.strategy.get("state");
      if (serializedState == null) return undefined;
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };

  public saveState = (state: State) => {
    try {
      const serializedState = JSON.stringify(state);
      this.strategy.set("state", serializedState);
    } catch (error) {
      console.error(error);
    }
  };
}

class LocalStrategy {
  public get = window.localStorage.getItem.bind(window.localStorage);
  public set = window.localStorage.setItem.bind(window.localStorage);
}

export default new PersistState(new LocalStrategy());
