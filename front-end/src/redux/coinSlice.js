import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    coinCount: 50
  };

// 상점 코인 관리
const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    decrement: (state, action) => {
      state.coinCount -= action.payload;
    }
  }
})

export const { decrement } = coinSlice.actions
export default coinSlice.reducer;