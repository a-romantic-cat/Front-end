import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const completeMission = createAsyncThunk(
  'missions/complete',
  async (missionId, thunkAPI) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(`https://dev.nangmancat.shop/missions/${missionId}`, {}, {
      headers: {
        //Authorization: `Bearer ${token}`
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0RnJvbnRAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Nzk4OTg3MTksImV4cCI6MTcxMTQzNDcxOX0.U_wPr40TAh6blLYYJGR-8gvhFXA_cwxGKPFGzad4b9g'
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