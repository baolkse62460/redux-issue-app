const CREATE_ISSUE = 'issue/CREATE';
const DELETE_ISSUE = 'issue/DELETE';


export const createAction = (id, issueName, devName, status) => {
  return {
    type: CREATE_ISSUE,
    payload: {
      id,
      issueName,
      devName,
      status,
    },
  }
};

export const deleteAction = (index) => {
  return {
    type: DELETE_ISSUE,
    payload: {
      index,
    },
  }
};

const initialState = {
  listIssue: [],
  id: '',
  issueName: '',
  devName: '',
  status: '',
}

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ISSUE: {
      const { payload } = action;
      const { id, issueName, devName, status } = payload;
      const newState = { ...state };
      newState.id = id;
      newState.issueName = issueName;
      newState.devName = devName;
      newState.status = status;
      newState.listIssue = [...state.listIssue, { id, issueName, devName, status }];
      return newState;
    }
    case DELETE_ISSUE: {
      const newState = { ...state };
      const { payload } = action;
      newState.listIssue = state.listIssue.filter(function (_, index) {
        return index !== payload.index;
      })
      return newState;
    }
    default: return state;
  }
}