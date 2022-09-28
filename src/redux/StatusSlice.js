import { createSlice } from "@reduxjs/toolkit";

const initialstatus = {
  status: [],
};

export const statusSlice = createSlice({
  name: "status",
  initialState: initialstatus,
  reducers: {
    showStatus: (state) => state,
    addStatus: (state, action) => {
      state.status.push(action.payload);
    },
    deleteStatus: (state, action) => {
      const id = action.payload;
      state.status = state.status.filter((s) => s.statusId !== id);
    },
    updateStatus: (state, action) => {
      const { statusId, status} = action.payload;
      const isStatusExist = state.status.filter((s) => s.statusId === statusId);
      if (isStatusExist) {
        isStatusExist[0].status = status;
      }
    },
  },
});

export const { showStatus, deleteStatus, updateStatus, addStatus } =
  statusSlice.actions;
export default statusSlice.reducer;
