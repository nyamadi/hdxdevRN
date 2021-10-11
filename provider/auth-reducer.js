import actions from './auth-actions';

function reducer(state, action) {
  switch (action.type) {
    case actions.SAVE_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    case actions.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    case actions.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
  }
}

export default reducer;
