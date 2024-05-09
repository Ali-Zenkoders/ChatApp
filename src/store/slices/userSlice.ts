import {createSlice} from '@reduxjs/toolkit';
import {PURGE} from 'redux-persist';
import {persistor} from '../store';

export interface UserState {
  id: number | null;
  name: string | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    setLogout(state) {
      state.id = null;
      state.name = null;
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(PURGE, state => {
      persistor.purge();
      console.log(state);
    });
  },
});

export const {setUserData, setLogout} = userSlice.actions;
export default userSlice.reducer;
