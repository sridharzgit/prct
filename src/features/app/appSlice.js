import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

const initialState = {
  loading:false ,
  apps : [],
  error:'',
  createApp: {
    loading: false,
    error: '',
    app : {}
  },
  deleteApp: {
    loading: false ,
    error:'',
    app:{}
  }
}

export const fetchApps = createAsyncThunk('apps/fetchApps',()=>{
  return api.get("apps").then(response=>{
    console.log("Response returned:",response)
    return response.data})
})

export const createApp = createAsyncThunk('apps/createApp',(appName)=>{
  return api.post("apps/create",{Name:appName}).then(response=>{
    console.log("Response returned for createApp:",response)
    return response.data
  })
})

export const deleteApp = createAsyncThunk('apps/deleteApp',(appId)=>{
  return api.post('apps/delete',{Id:appId}).then(response=>{
    console.log("Response returned for createApp:",response)
    return response.data
  })
})

const appSlice = createSlice({
  name:'app',
  initialState,
  reducers: {
    editApp: (state,action) =>{
      state.apps.forEach((item, i) => {
        item.hideTitle = false
      });

      const appObj = state.apps.find(app=>app._id===action.payload.appId)
      appObj.hideTitle = true
    },
    showAllAppTitles: (state,action) =>{
      state.apps.forEach((item, i) => {
        item.hideTitle = false
      });
    }
  },

  extraReducers: builder=> {
    builder.addCase(fetchApps.pending, state=>{
      state.loading = true
    })
    builder.addCase(fetchApps.fulfilled,(state,action)=>{
      state.loading = false
      state.apps = action.payload
      state.error = ''
    })
    builder.addCase(fetchApps.rejected,(state,action)=>{
      state.loading = false
      state.apps = []
      state.error = action.error.message
    })
    builder.addCase(createApp.pending, (state)=>{
      state.createApp.loading = true
    })
    builder.addCase(createApp.fulfilled,(state,action)=>{
      state.createApp.loading = false
      state.createApp.app = action.payload
      state.apps.push(action.payload)
    })
    builder.addCase(createApp.rejected,(state,action)=>{
      state.createApp.loading = false
      state.createApp.error = action.error.message
    })
    builder.addCase(deleteApp.pending,(state)=>{
      state.deleteApp.loading = true
    })
    builder.addCase(deleteApp.fulfilled,(state,action)=>{
      state.deleteApp.loading = false
      state.apps = state.apps.filter(app=>app._id!==action.payload._id)
    })
    builder.addCase(deleteApp.rejected,(state,action)=>{
      state.deleteApp.loading = false
      state.deleteApp.error = action.error.message
    })

  }
})

export default appSlice.reducer
export const { editApp,showAllAppTitles } = appSlice.actions

// addApp
// deleteApp
// editApp
// addView
// deleteView
// editView
// addFolderView
// deleteFolderView
// editFolderView
