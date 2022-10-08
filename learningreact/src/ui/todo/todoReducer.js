export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'change': {
      state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case 'delete': {
      return state.filter((t) => t.id !== action.task.id);
    }
    default: {
      throw Error('unknown action ' + action.type);
    }
  }
};
