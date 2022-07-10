import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {
  sidebar: { show: boolean };
}

const initialState: ModalInterface = { sidebar: { show: false } };

const modals = createSlice({
  initialState,
  name: "modals",
  reducers: {
    toggleSidebarModal: (state) => {
      return { ...state, sidebar: { show: !state.sidebar.show } };
    },
  },
});

export default modals;

export const { toggleSidebarModal } = modals.actions;
