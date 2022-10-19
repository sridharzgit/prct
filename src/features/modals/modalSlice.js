import { createSlice } from "@reduxjs/toolkit"

export const modalTypes = { CREATE_APP_MODAL:"createApp",DELETE_APP_MODAL:"deleteAppModal",EDIT_APP_MODAL:"editAppModal"}

const initialState = { }
Object.keys(modalTypes).forEach(key => {
  initialState[modalTypes[key]] = {show:false}
});


const modalSlice = createSlice({
  name:"modalSlice",
  initalState: initialState,
  reducers: {
    show: (state,action) =>{
      state[action.payload.modalType].show = true
      state[action.payload.modalType].data = action.payload.data

    },
    hide: (state,action) =>{
      state[action.payload.modalType].show = false
    }
  }
})

export default modalSlice.reducer
export { show, hide } = modalSlice.actions
