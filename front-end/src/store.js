import { configureStore, createSlice } from '@reduxjs/toolkit'

const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    coinCount: 50
  },
  reducers: {
    decrement: (state, action) => {
      state.coinCount -= action.payload;
    }
  }
})

export const { decrement } = coinSlice.actions

export default configureStore({
  reducer: {
    coin: coinSlice.reducer
  }
})