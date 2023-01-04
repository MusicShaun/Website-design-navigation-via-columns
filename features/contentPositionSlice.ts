import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"


interface IState {
  value: number
}
const initialState: IState = {
  value: 27
}

export const contentPositionSlice = createSlice({
  name: 'contentPosition',

  initialState,

  reducers: {

    setContentPosition: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },

  }
})


export const {
  setContentPosition,

} = contentPositionSlice.actions

export const selectContentPosition = (state: RootState) => state.contentPosition.value

export default contentPositionSlice.reducer