import createHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer, push } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "../features/front/auth/reducer";
import questions from "../features/front/application/reducer";
import thunk from "redux-thunk";
import entity from "../features/back/entity/reducer";

export const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = combineReducers({
  router: routerReducer,
  auth,
  questions,
  entity
});

export interface IState {
  router: ReturnType<typeof routerReducer>;
  auth: ReturnType<typeof auth>;
  questions: ReturnType<typeof questions>;
  entity: ReturnType<typeof entity>;
}

type AllActions = any;

//Redirect to Home Page
const hasLoggedIn = (action: any) => {
  return action.type === "LOGIN_SUCCESS";
};
//Redirect to Login Page
const hasRegistred = (action: any) => {
  return action.type === "REGISTER_SUCCESS";
};

const hasCreatedProfile = (action: any) => {
  return action.type === "UPDATE_PROFILE_SUCCESS";
};
//Creating a Redirect to home middleware
const redirectMiddleware = (store: Store) => (next: any) => (action: any) => {
  if (hasLoggedIn(action)) {
    (store as any).dispatch(push("/"));
  }
  if (hasRegistred(action)) {
    (store as any).dispatch(push("/auth/verify"));
  }

  if (hasCreatedProfile(action)) {
    (store as any).dispatch(push("/"));
  }
  next(action);
};

export const store: Store<IState, AllActions> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware, thunk, redirectMiddleware))
);
