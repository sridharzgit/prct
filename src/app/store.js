import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../features/app/appSlice'
import modalReducer from '../features/app/modalSlice'
const store = configureStore({
  reducer: {
    app:appReducer,
    modal:modalReducer
  }
})

export default store
