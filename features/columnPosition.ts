import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


interface IState {
  value: {
    columnOneBooly: boolean,
    columnOnePosition: string,
    columnTwoBooly: boolean,
    columnTwoPosition: string,
    columnThreeBooly: boolean
    columnThreePosition: string
  }
}
const initialState: IState = {
  value: {
    columnOneBooly: false,
    columnOnePosition: '0',
    columnTwoBooly: false,
    columnTwoPosition: '0',
    columnThreeBooly: false,
    columnThreePosition: '0' ,
  }
}


const columnPositionSlice = createSlice({
  name: 'columnPosition',
  initialState,
  reducers: {

    setHome: (state) => {
      state.value = {
        ...initialState.value
      }
    },
    setPage: (state, action: PayloadAction<object>) => {
      state.value = {
          ...initialState.value,
          ...action.payload
        }
    }, 
    setColumnOneTrue: (state) => {
      state.value = {
        ...initialState.value,
        columnOneBooly: true, 
        columnOnePosition: state.value.columnOnePosition,
        columnTwoPosition: state.value.columnTwoPosition,
        columnThreePosition: state.value.columnThreePosition,
      }
    },
    setColumnTwoTrue: (state) => {
      state.value = {
        ...initialState.value,
        columnTwoBooly: true,
        columnOnePosition: state.value.columnOnePosition,
        columnTwoPosition: state.value.columnTwoPosition,
        columnThreePosition: state.value.columnThreePosition,
      }
    },
    setColumnThreeTrue: (state) => {
      state.value = {
        ...initialState.value,
        columnThreeBooly: true,
        columnOnePosition: state.value.columnOnePosition,
        columnTwoPosition: state.value.columnTwoPosition,
        columnThreePosition: state.value.columnThreePosition,
      }
    },
  }
})

export const { setHome, setPage, setColumnOneTrue, setColumnTwoTrue, setColumnThreeTrue } = columnPositionSlice.actions

export const selectPageTurnState = (state: RootState) => state.pageTurnState.value

export default columnPositionSlice.reducer





