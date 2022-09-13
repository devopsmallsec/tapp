import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  whitelist: ["Auth", "Master"],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getMiddleware = () => {
  const middleware = [reduxThunk];

  return applyMiddleware(...middleware);
};

export default () => {
  let store = createStore(persistedReducer, getMiddleware());
  let persistor = persistStore(store);
  return { store, persistor };
};
