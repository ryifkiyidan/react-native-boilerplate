import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: { theme: null, darkMode: null, lang: 'en' },
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme;
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode;
      }
    },
    setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
      if (!state.theme) {
        state.theme = theme;
        state.darkMode = darkMode;
      }
    },
    changeLang: (state, { payload: { lang } }) => {
      if (typeof lang !== 'undefined') {
        state.lang = lang;
      }
    },
    setDefaultLang: (state, { payload: { lang } }) => {
      if (!state.lang) {
        state.lang = lang;
      }
    },
  },
});

export const { changeTheme, setDefaultTheme, changeLang, setDefaultLang } =
  slice.actions;

export default slice.reducer;
