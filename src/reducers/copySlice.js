import { createSlice } from "@reduxjs/toolkit";

export const copySlice = createSlice({
  name: "copyCount",
  initialState: { copyCount: 101 },
  reducers: {
    addedEven: (state) => {
      // state.copyCount += 2;
      state.copyCount = 2222;
    },
  },
});

export const { addedEven } = copySlice.actions;
export default copySlice.reducer;
