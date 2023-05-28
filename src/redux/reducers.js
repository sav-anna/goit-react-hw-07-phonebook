import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const filterReducer = filter.reducer;
export const { filterContacts } = filter.actions;
