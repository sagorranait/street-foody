import { configureStore } from '@reduxjs/toolkit';
import getUser from '../features/userSlice'; // Import file from features Folder

export const store = configureStore({
  reducer: {
      users: getUser // sliceName:importName
  },
});
