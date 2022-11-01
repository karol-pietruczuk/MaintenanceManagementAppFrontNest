import { createSlice } from '@reduxjs/toolkit';
import { RootState } from "../../store";

export interface LoadingState {
  loading: boolean;
  progress: number;
  inProgress: boolean;
  visible: boolean;
}

const initialState: LoadingState = {
  loading: false,
  inProgress: false,
  progress: 0,
  visible: false,
};

interface SetProgress {
  payload: number;
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    clearLoading: (state) => {
      state.loading = false;
    },

    setInProgress: (state) => {
      state.inProgress = true;
    },

    clearInProgress: (state) => {
      state.inProgress = false;
    },

    setProgress: (state, action: SetProgress) => {
      state.progress = action.payload;
    },

    setVisible: (state) => {
      state.visible = true;
    },

    clearVisible: (state) => {
      state.visible = false;
    },
  },
});

export const {setLoading, clearLoading, setInProgress, clearInProgress, setProgress, setVisible, clearVisible} = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading;