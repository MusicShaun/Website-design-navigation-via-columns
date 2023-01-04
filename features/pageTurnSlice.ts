import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IState { 
  value: string; 
}

const initialState: IState = {
  value: '/',
}

export const pageTurnSlice = createSlice({
  name: 'pageTurnState',
  initialState,
  reducers: {
    pageTurnChange: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: action.payload
      }
    }
  },

})

export const {pageTurnChange} = pageTurnSlice.actions

export const selectPageTurnState = (state: RootState) => state.pageTurnState.value

export default pageTurnSlice.reducer
