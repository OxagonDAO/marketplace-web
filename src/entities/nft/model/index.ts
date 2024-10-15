import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/types";
import { InitialState } from "../types";


const initialState: InitialState = {
  form: {
    isOpen: false
  }
};

const slice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    openCollectionForm: (state) => {
      state.form = {
        isOpen: true
      }
    },
    closeCollectionForm: (state) => {
      state.form = {
        isOpen: false
      }
    },
  },
});

export const selectCollectionForm = (state: RootState) => {
  return state.nft.form;
};


export const { reducer, name } = slice;
export const { closeCollectionForm, openCollectionForm } = slice.actions;
