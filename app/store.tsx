import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import contentPositionReducer from '../features/contentPositionSlice';
import pageTurnReducer from '../features/pageTurnSlice'
import columnPositionReducer from '../features/columnPosition';

export const store = configureStore({
  reducer: {
    contentPosition: contentPositionReducer,
    columnPosition: columnPositionReducer,
    pageTurnState: pageTurnReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;