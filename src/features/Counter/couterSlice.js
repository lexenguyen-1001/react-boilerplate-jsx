import { createSlice } from '@reduxjs/toolkit';
import STATUS from '../../constants/status';

export const ROOT_STATE_NAME = 'counter';

const counterSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState: {
    status: STATUS.DEFAULT,
    data: 0,
  },
  reducers: {
    increase(state, action) {
      state.data += action.payload.data;
      state.status = STATUS.SUCCESS;
    },
    decrease(state, action) {
      state.data -= action.payload.data;
      state.status = STATUS.SUCCESS;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
