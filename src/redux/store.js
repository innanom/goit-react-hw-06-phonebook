import { configureStore } from "@reduxjs/toolkit";
import { filterReduser } from "./FilterSlice";
import { contactsReducer } from "./ContactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
    
  }
});

