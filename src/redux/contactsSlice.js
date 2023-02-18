import { createSlice, nanoid } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
      addContact(state, action) {
          const contact ={...action.payload, id: nanoid()}
      state.push(contact);
    },
    deleteContact(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
