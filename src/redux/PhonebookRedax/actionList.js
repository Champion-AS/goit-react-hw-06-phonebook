import { addContact, changeFilter, deleteContact } from './typesectoin';

export const addContactAction = payload => ({
  type: addContact,
  payload,
});

export const changeFilterAction = payload => ({
  type: changeFilter,
  payload,
});
export const deleteContactAction = payload => ({
  type: deleteContact,
  payload,
});
