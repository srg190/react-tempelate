import { createSlice, createAction, PrepareAction } from "@reduxjs/toolkit";
import { User } from "./types";

interface InitialState extends User {}

const initialState: InitialState = {
  email: "",
  password: "",
  name: "",
  age: 0,
};

export const setUser = createAction<PrepareAction<User>>(
  "user/setUser",
  (user: User) => {
    localStorage.setItem("theme", JSON.stringify(user));
    return {
      payload: user,
    };
  }
);

export const userSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      const { email, password, name, age } = action.payload;
      state.email = email;
      state.name = name;
      state.password = password;
      state.age = age;
    });
  },
});

export default userSlice.reducer;
