import { AnyAction } from 'redux';
const CHANGE_COUNT = 'CHANGE_COUNT';
const DEFAULT_COUNT = 'DEFAULT_COUNT'

export const changeCount = () => ({ type: CHANGE_COUNT});
export const setDefaultCount = () => ({ type: DEFAULT_COUNT});

const reducer = (count = 0, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_COUNT:
     return count + 1;
    
    case DEFAULT_COUNT:
     return count = 0;

    default:
      return count;
  }
};

export default reducer;
