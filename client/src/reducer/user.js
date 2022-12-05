export const initialState = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  me: null,
  loadLoginInfoLoading: false,
  loadLoginInfoDone: false,
  loadLoginInfoError: null,
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_UP_RESET = 'SIGN_UP_RESET';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_LOGIN_INFO_REQUEST = 'LOAD_LOGIN_INFO_REQUEST';
export const LOAD_LOGIN_INFO_SUCCESS = 'LOAD_LOGIN_INFO_SUCCESS';
export const LOAD_LOGIN_INFO_FAILURE = 'LOAD_LOGIN_INFO_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    case SIGN_UP_RESET:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: false,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginDone: false,
        loginError: null,
      };
    case LOG_IN_SUCCESS:
      console.log('reducer', action.data);

      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        me: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: action.error,
      };
    case LOAD_LOGIN_INFO_REQUEST:
      return {
        ...state,
        loadLoginInfoLoading: true,
        loadLoginInfoDone: false,
        loadLoginInfoError: null,
      };
    case LOAD_LOGIN_INFO_SUCCESS:
      return {
        ...state,
        loadLoginInfoLoading: false,
        loadLoginInfoDone: true,
        me: action.data,
      };
    case LOAD_LOGIN_INFO_FAILURE:
      return {
        ...state,
        loadLoginInfoLoading: false,
        loadLoginInfoError: action.error,
      };
    default:
      return state;
  }
}

export default reducer;