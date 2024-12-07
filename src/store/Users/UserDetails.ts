import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface UsersState {
  users: Record<string, any>;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk('users/getUser', async () => {
  const response = await axios.get('https://dummyjson.com/users');
  return response.data;
});

// Thunk to search for a user
export const searchUser = createAsyncThunk(
  'users/searchUser',
  async (query: string) => {
      const response = await axios.get(`https://dummyjson.com/users/search?q=${query}`);
      return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getUser lifecycle
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle searchUser lifecycle
      .addCase(searchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default usersSlice.reducer;
