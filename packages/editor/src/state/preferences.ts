// GENERATED 
/**
 * @fileoverview A module that manages user preferences using Redux Toolkit. 
 * @package
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Interface for the preference state. */
export interface PreferenceState {
  autoSave: boolean;
}

/** The initial state for preferences. */
const initialState: PreferenceState = {
  autoSave: true,
}

/**
 * A Slice that creates reducers and actions for preferences.
 * @param name - The name of the slice.
 * @param initialState - The initial state of the slice.
 * @param reducers - Reducers that modify the state, generated by createSlice.
 */
export const preferenceSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    /**
     * Toggles the auto-save preference, modifying the state accordingly.
     * @param state - The current state of the preferences.
     */
    toggleAutoSave: (state) => {
      state.autoSave = !state.autoSave;
    },
  },
});

/** Actions generated from the preference slice. */
export const { toggleAutoSave } = preferenceSlice.actions;

/** The preference reducer generated by the slice. */
export default preferenceSlice.reducer;