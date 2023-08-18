import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    id: ''
  },
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updateId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    }
  }
});

export const { updateUsername, updateId } = userSlice.actions;

export default userSlice.reducer;
