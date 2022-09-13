import axios from "axios";
import { setAuthToken } from "../../utils/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getOptions from "../api";
import * as constants from "../constants/auth";
import { REACT_APP_SERVER } from "../../utils/secret";

/**
 * LOGIN
 */
export const login = (user) => async (dispatch) => {
  dispatch({ type: constants.LOGIN.SUCCESS, payload: user });
};

export const processAuth = (input, callback) => async (dispatch) => {
  const { payload, key, dispatch_key, params, query } = input;

  try {
    const gotOptions = getOptions("auth", key, callback);
    let the_key = dispatch_key || key;

    let { api, config, ret } = gotOptions;

    api = REACT_APP_SERVER + api;
    params &&
      params.forEach((element) => {
        api = api + "/" + element;
      });

    if (query) {
      api = api + "?" + query;
    }
    const default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // const res = await axios.post("/api/auth/register/", body, config);
    const res = await axios.post(api, body, config || default_config);

    await dispatch({
      type: constants[the_key].SUCCESS,
      payload: res.data,
    });

    await dispatch(loadUser());

    return res;
  } catch (err) {
    let output = err.response && err.response.data;

    return output;
  }
};

export const updateAuth = (input, callback) => async (dispatch) => {
  const { payload, key, dispatch_key, params, query } = input;

  const body = JSON.stringify({ ...payload });

  try {
    const gotOptions = getOptions("auth", key, callback);
    let the_key = dispatch_key || key;

    let { api, config, ret } = gotOptions;

    api = REACT_APP_SERVER + api;
    params &&
      params.forEach((element) => {
        api = api + "/" + element;
      });

    if (query) {
      api = api + "?" + query;
    }
    const default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let current_token = await AsyncStorage.getItem("token");

    if (current_token) {
      setAuthToken(current_token);
    }

    // const res = await axios.post("/api/auth/register/", body, config);
    const res = await axios.patch(api, body, config || default_config);

    await dispatch({
      type: constants[the_key].SUCCESS,
      payload: res.data,
    });

    await dispatch(loadUser());

    return res;
  } catch (err) {
    let output = err.response && err.response.data;

    return output;
  }
};

export const loadUser = (location) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let current_token = await AsyncStorage.getItem("token");
  if (current_token) {
    setAuthToken(current_token);
  }

  try {
    let query = "?";
    let coords = location && location.coords;
    if (coords) {
      query += `lon=${coords.longitude}&&lat=${coords.latitude}`;
    }
    const res = await axios.get(
      `${REACT_APP_SERVER}/api/auth/load_user${query}`
    );

    if (res.data) {
      let payload = res.data;
      dispatch({
        type: constants.LOAD_USER.SUCCESS,
        payload,
      });
    } else {
      dispatch({ type: constants.LOGOUT.SUCCESS });
    }
    return res;
  } catch (err) {
    dispatch({ type: constants.LOGOUT.SUCCESS });

    return err;
  }
};

/**
 * LOGOUT
 */
export const logout = () => async (dispatch) => {
  await setAuthToken();

  dispatch({ type: constants.LOGOUT.SUCCESS });
};
