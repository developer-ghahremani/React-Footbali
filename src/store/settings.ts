import { createSlice } from "@reduxjs/toolkit";

interface SettingsInterface {
  ui: {
    darkMode: boolean;
  };
}

const initialState: SettingsInterface = { ui: { darkMode: false } };
const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      return { ...state, ui: { darkMode: !state.ui.darkMode } };
    },
  },
});

export default settings;

export const { toggleDarkMode } = settings.actions;
