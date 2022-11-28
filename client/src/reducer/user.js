export const initialState = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_UP_RESET = 'SIGN_UP_RESET';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

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
    default:
      return state;
  }
}

export default reducer;