import { combineReducers } from "redux";

import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  // user,
  post,
});

export default rootReducer;
