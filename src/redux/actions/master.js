import axios from "axios";
import getOptions from "../api";
import { removeAlert, setAlert } from "./alert";
import { REACT_APP_SERVER } from "../../utils/secret";

export const resetMaster = () => async (dispatch) => {
  try {
    dispatch({
      type: "reset_master",
      payload: {},
    });
  } catch (err) {
    setAlert("reset_master", err);
  }
};
export const setMaster = (props) => async (dispatch) => {
  const { payload, dispatch_key, key, ret, replace } = props;
  let the_key = dispatch_key || key;

  try {
    dispatch({
      type: the_key,
      payload,
      replace,
      ret: ret || {},
    });
    removeAlert(the_key, dispatch);

    return "";
  } catch (err) {
    setAlert(the_key, err);
  }
};
// create or update

export const create = (props, callback) => async (dispatch) => {
  const {
    payload,
    dispatch_key,
    params,
    key,
    resetFields,
    query,
    new_state,
    update,
    replace,
    update_state,
    additional_dispatch,
  } = props;
  const gotOptions = getOptions("create", key, callback);
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

  try {
    const default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(api, payload, config || default_config);

    dispatch({
      type: the_key,
      payload: res.data,
      update,
      new_state,
      update_state,
      replace,
      ret: ret || {},
    });

    if (additional_dispatch) {
      let entries = Object.entries(additional_dispatch);

      entries.forEach((entry) => {
        let config = {
          type: entry[0],
          payload: res.data,
          update,
          new_state,
          update_state,
          replace,
          ret: ret || {},
        };
        dispatch(config);
      });
    }
    resetFields && resetFields();

    const output = new Promise((resolutionFunc) => {
      resolutionFunc(res);
    });

    removeAlert(the_key, dispatch);

    return output;
    // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};

export const update = (props, callback) => async (dispatch) => {
  const {
    payload,
    dispatch_key,
    params,
    key,
    resetFields,
    query,
    new_state,
    update,
    replace,
    update_state,
    additional_dispatch,
  } = props;
  const gotOptions = getOptions("update", key, callback);
  let the_key = dispatch_key || key;

  let { api, config, ret } = gotOptions;
  params &&
    params.forEach((element) => {
      api = api + "/" + element;
    });

  if (query) {
    api = api + "?" + query;
  }

  try {
    const default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.patch(api, payload, config || default_config);

    dispatch({
      type: the_key,
      payload: res.data,
      update,
      new_state,
      update_state,
      replace,
      ret: ret || {},
    });

    if (additional_dispatch) {
      let entries = Object.entries(additional_dispatch);

      entries.forEach((entry) => {
        let config = {
          type: entry[0],
          payload: res.data,
          update,
          new_state,
          update_state,
          replace,
          ret: ret || {},
        };
        dispatch(config);
      });
    }
    resetFields && resetFields();

    const output = new Promise((resolutionFunc) => {
      resolutionFunc(res);
    });

    removeAlert(the_key, dispatch);

    return output;
    // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};

export const api = (props, callback) => async (dispatch) => {
  const {
    payload,
    dispatch_key,
    params,
    key,
    resetFields,
    query,
    new_state,
    update,
    replace,
    update_state,
    additional_dispatch,
  } = props;
  const gotOptions = getOptions("create", key, callback);
  let the_key = dispatch_key || key;

  let { api, config, ret } = gotOptions;
  params &&
    params.forEach((element) => {
      api = api + "/" + element;
    });

  if (query) {
    api = api + "?" + query;
  }

  try {
    const default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(api, payload, config || default_config);

    dispatch({
      type: the_key,
      payload: res.data,
      update,
      new_state,
      update_state,
      replace,
      ret: ret || {},
    });

    if (additional_dispatch) {
      let entries = Object.entries(additional_dispatch);

      entries.forEach((entry) => {
        let config = {
          type: entry[0],
          payload: res.data,
          update,
          new_state,
          update_state,
          replace,
          ret: ret || {},
        };
        dispatch(config);
      });
    }
    resetFields && resetFields();

    const output = new Promise((resolutionFunc) => {
      resolutionFunc(res);
    });

    removeAlert(the_key, dispatch);

    return output;
    // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};

// create or update
export const read = (props, callback) => async (dispatch) => {
  const { key, params, dispatch_key, query, update, replace } = props;
  const gotOptions = getOptions("read", key, callback);
  let { api, ret } = gotOptions;

  params &&
    params.forEach((element) => {
      api = api + "/" + element;
    });

  if (query) {
    api = api + query;
  }

  const default_config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let the_key = dispatch_key || key;
  try {
    const res = await axios.get(api, default_config);
    dispatch({
      type: the_key,
      payload: res.data,
      replace,
      update,
      ret: ret || {},
    });
    let output = new Promise((resolve) => resolve(res));
    removeAlert(the_key, dispatch);

    return output;

    // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};

export const read_one = (props, callback) => async (dispatch) => {
  const { key, params, dispatch_key, query } = props;
  const gotOptions = getOptions("read_one", key, callback);
  let { api } = gotOptions;

  params &&
    params.forEach((element) => {
      api = api + "/" + element;
    });

  if (query) {
    api = api + query;
  }

  const default_config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let the_key = dispatch_key || key;

  try {
    const res = await axios.get(api, default_config);

    dispatch({
      type: the_key,
      payload: res.data,
      replace: true,
    });
    let output = new Promise((resolve) => resolve(res));
    removeAlert(the_key, dispatch);

    return output;
    // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};
// create or update
export const quick = (props, callback) => async (dispatch) => {
  const { key, params, dispatch_key, update_state, update, replace, payload } =
    props;
  const default_config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const gotOptions = getOptions("quick", key, callback);
  let { api } = gotOptions;

  params.forEach((element) => {
    api = api + "/" + element;
  });
  let the_key = dispatch_key || key;

  try {
    const res = await axios.post(api, payload, default_config);
    dispatch({
      type: the_key,
      payload: res.data,
      update,
      update_state,
      replace,
    });
    removeAlert(the_key, dispatch);

    return res;
    // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};

// create or update
export const drop = (props, callback) => async (dispatch) => {
  const { key, params, dispatch_key } = props;
  const default_config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const gotOptions = getOptions("drop", key, callback);
  let { api } = gotOptions;

  params.forEach((element) => {
    api = api + "/" + element;
  });
  let the_key = dispatch_key || key;

  try {
    const res = await axios.post(api, default_config);
    dispatch({
      type: dispatch_key || key,
      payload: res.data,
      drop: true,
    });
    removeAlert(the_key, dispatch);

    return res;
    // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};

// get options
export const get_doc_option =
  (params = [], key) =>
  async (dispatch) => {
    const default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let api = "/api/product/product_doc";
    params.forEach((element) => {
      api = api + "/" + element;
    });
    let the_key = key;

    try {
      const res = await axios.post(api, default_config);
      dispatch({
        type: key,
        payload: res.data,
      });
      removeAlert(the_key, dispatch);

      return res;
      // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
    } catch (err) {
      let output = err.response && err.response.data;
      setAlert(the_key, dispatch, output);

      return output;
    }
  };

// get options
export const set_current_location = (position) => async (dispatch) => {
  let the_key = "my_location";

  try {
    let payload = position ? position.coords : {};
    dispatch({
      type: the_key,
      payload: [position],
    });
    removeAlert(the_key, dispatch);

    return payload;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};

export const close_drawer = () => async (dispatch) => {
  let the_key = "search_query";
  try {
    dispatch({
      type: the_key,
      payload: {},
    });
    removeAlert(the_key, dispatch);
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(the_key, dispatch, output);

    return output;
  }
};
