import { createSlice} from "@reduxjs/toolkit";

const ContactsSlice = createSlice({
    name: 'contacts',
    initialState: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    redusers: {
        addContact(state, action) {
            state.push(action.payload);
        },
                    
        deleteContact(state, action) {
            state.filter(({ id }) => id !== action.payload);

        }
    },
});

export const { addContact, deleteContact} = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;