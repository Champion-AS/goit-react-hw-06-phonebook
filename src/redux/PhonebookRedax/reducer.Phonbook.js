import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
    filter: '',
}
const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, changeFilter, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;