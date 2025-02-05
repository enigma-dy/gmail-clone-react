import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isToggleMenu: false,
    isToggleMore: false,
    isToggleApp: false,
    isToggleSidePanel: false,
    istoggleCheckBoxOption: false,
    isSelectionAction: false,
    isSelectedMessageOption: false,
    isQuickOption: false,
    isCollapseMenu: false,
    isToggleComposeMail: false,
    isToggleMobileComposeMail: false,
    isToggleMobileNav: false,
  },
  reducers: {
    toggleMainMenu: (state) => {
      state.isToggleMenu = !state.isToggleMenu;
    },
    toggleMore: (state) => {
      state.isToggleMore = !state.isToggleMore;
    },
    toggleApps: (state) => {
      state.isToggleApp = !state.isToggleApp;
    },
    toggleSidePanel: (state) => {
      state.isToggleSidePanel = !state.isToggleSidePanel;
    },
    toggleCheckBoxOption: (state) => {
      state.istoggleCheckBoxOption = !state.istoggleCheckBoxOption;
    },
    toggleQuickSelectedMessageOption: (state) => {
      state.isQuickOption = !state.isQuickOption;
    },
    toggleSelectionAction: (state) => {
      state.isSelectionAction = !state.isSelectionAction;
    },
    toggleSelecedMessageOption: (state) => {
      state.isSelectedMessageOption = !state.isSelectedMessageOption;
    },
    toggleCollapseMenu: (state) => {
      state.isCollapseMenu = !state.isCollapseMenu;
    },
    toggleComposeMail: (state) => {
      state.isToggleComposeMail = !state.isToggleComposeMail;
    },
    toggleMobileComposeMail: (state) => {
      state.isToggleMobileComposeMail = !state.isToggleMobileComposeMail; // Correct
    },
    toggleMobileNav: (state) => {
      state.isToggleMobileNav = !state.isToggleMobileNav;
    },
  },
});

export const {
  toggleMainMenu,
  toggleApps,
  toggleSidePanel,
  toggleMore,
  toggleCheckBoxOption,
  toggleSelectionAction,
  toggleSelecedMessageOption,
  toggleQuickSelectedMessageOption,
  toggleCollapseMenu,
  toggleComposeMail,
  toggleMobileComposeMail,
  toggleMobileNav,
} = toggleSlice.actions;

export default toggleSlice.reducer;
