import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  email: string;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
    },
  },
});


export const {setUser, clearUser} = UserSlice.actions;
export default UserSlice.reducer;