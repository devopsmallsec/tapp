import * as constants from "../constants/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuthToken } from "../../utils/auth";

export const INITIAL_STATE = {
  user: {},
  error: null,
  loading: false,
  authenticated: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload = {} } = action;
  let current_profile = payload && payload.current_profile;
  let current_location = payload && payload.current_location;
  let auth_page = payload && payload.page;
  let output;

  switch (type) {
    // LOGIN
    case constants.UPDATE_USER.SUCCESS:
    case constants.SOCIAL_AUTH.SUCCESS:
    case constants.REGISTER.SUCCESS:
    case constants.LOGIN.SUCCESS:
    case constants.PASSWORD_RESET.SUCCESS:
    case constants.EMAIL_VERIFIED.SUCCESS:
    case constants.VERIFICATION.SUCCESS:
      if (payload.token) {
        AsyncStorage.setItem("token", payload.token);
      }
      return state;

    case constants.LOAD_USER.SUCCESS:
      output = {
        ...state,
        current_profile,
        current_location,
        loading: false,
        authenticated: payload.verified,
        auth_page,
      };
      if (payload.token) {
        AsyncStorage.setItem("token", payload.token);
      }

      return output;

    // LOGOUT
    case constants.LOGOUT.SUCCESS:
      AsyncStorage.removeItem("token");
      return { ...INITIAL_STATE, authenticated: false, authenticating: false };
    default:
      return state;
  }
}
