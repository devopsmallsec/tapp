import { actionGenerator } from "../../utils/redux";

export const SOCIAL_AUTH = actionGenerator("AUTH/SOCIAL_AUTH");
export const REGISTER = actionGenerator("AUTH/REGISTER");
export const LOGIN = actionGenerator("AUTH/LOGIN");
export const LOAD_USER = actionGenerator("AUTH/LOAD_USER");
export const FORGOT_PASSWORD = actionGenerator("AUTH/FORGOT_PASSWORD");
export const EMAIL_VERIFIED = actionGenerator("AUTH/EMAIL_VERIFIED");
export const PASSWORD_RESET = actionGenerator("AUTH/PASSWORD_RESET");
export const UPDATE_USER = actionGenerator("AUTH/UPDATE_USER");
export const LOGOUT = actionGenerator("AUTH/LOGOUT");
export const VERIFICATION = actionGenerator("AUTH/VERIFICATION");
