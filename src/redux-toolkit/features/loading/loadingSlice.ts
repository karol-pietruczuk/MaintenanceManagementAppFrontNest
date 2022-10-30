import { createSlice } from '@reduxjs/toolkit';
import { RootState } from "../../store";

export interface LoadingState {
  progress: number;
  inProgress: boolean;
}

const initialState: LoadingState = {
  inProgress: false,
  progress: 0,
};

interface SetInProgress {}

interface ClearInProgress {}

interface SetProgress {
  payload: number;
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setInProgress: (state, action: SetInProgress) => {
      state.inProgress = true;
    },

    clearInProgress: (state, action: ClearInProgress) => {
      state.inProgress = false;
    },

    setProgress: (state, action: SetProgress) => {
      state.progress = action.payload;
    },
  },
});

export const {setInProgress, clearInProgress, setProgress} = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading;