import { REMOVE_ALERT } from "./types";

export const setAlert = (key, dispatch, payload) => {
  let type = "error_" + key;
  dispatch &&
    dispatch({
      type,
      key,
      payload,
    });
};

export const removeAlert = (key) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    key,
  });
};

export const distpatchRemoveAlert = (key, payload) => (dispatch) => {
  dispatch({
    key,
    type: REMOVE_ALERT,
    payload,
  });
};
