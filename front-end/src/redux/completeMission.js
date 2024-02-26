import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const completeMission = createAsyncThunk(
  'missions/complete',
  async (missionId, thunkAPI) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(`https://dev.nangmancat.shop/missions/${missionId}`, {}, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhaHkwMjA2MDZAZy5ob25naWsuYWMua3IiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZW1haWwiOiJhaHkwMjA2MDZAZy5ob25naWsuYWMua3IiLCJpYXQiOjE3MDg5NDU4NDQsImV4cCI6MTcwODk0NzY0NH0.vAguOOlRg6399ByqeIV6F213S_CuXqsZLhjYC41TFLw"}`
      },
    });
    return response.data;
  }
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(completeMission.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(completeMission.fulfilled, (state, action) => {
        state.loading = 'idle';

        // 서버 응답 출력
        console.log('Server response:', action.payload);

        if (action.payload.isSuccess) {
          console.log('미션 완료에 성공했습니다.');
        }
      })
      .addCase(completeMission.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

// 리듀서를 export 합니다.
export default missionsSlice.reducer;