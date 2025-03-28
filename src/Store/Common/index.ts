import { createSlice } from '@reduxjs/toolkit';

const common = createSlice({
  name: 'common',
  initialState: { token: null ,uId:null},
  reducers: {
    updateAuthTokenRedux: (state, action) => ({
      ...state,
      token: action.payload.token,
      uId :action.payload.uId
    }),
  },
});

export const { updateAuthTokenRedux } = common.actions;

export default common.reducer;
