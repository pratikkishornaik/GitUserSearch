import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { rootReducer } from "../reducers/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export function configureStore() {
  const mainReducer = combineReducers({
    rootReducer: rootReducer
  });

  if (process.env.NODE_ENV !== "production") {
    const middleware = composeWithDevTools(middleware);
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  composeEnhancers(applyMiddleware(...getMiddlewares()));

  const store = createStore(
    mainReducer,

    composeEnhancers(applyMiddleware(...getMiddlewares()))
  );

  return store;
}

export const store = configureStore();

function getMiddlewares() {
  let middlewares = [thunk];
  return middlewares;
}
