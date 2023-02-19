import { createSlice } from '@reduxjs/toolkit'

export const socialFun = createSlice({
  name: 'socialFun',
  initialState: {
    cats: [],
    isLoggedIn: false,
    userDetails: '',
    userName: '',
    errorCode: '',
    loginPending: false,
    isServerUp: false,
    appHeight: 0
  },
  reducers: {
    addCat: (state, action) => {
      state.cats.push(action.payload)
    },
    toggleUserIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setLoggedUserDetails: (state, action) => {
      state.userDetails = action.payload
    },
    setErrorCode: (state, action) => {
      state.errorCode = action.payload
    },
    togglePending: (state, action) => {
      state.loginPending = action.payload
    },
    toggleServerUp: (state, action) => {
      state.isServerUp = action.payload
    },
    setAppHeight: (state, action) => {
      state.appHeight = action.payload
    },
  },
})

export const { addCat, toggleUserIsLoggedIn, setLoggedUserDetails, setErrorCode, togglePending, toggleServerUp, setAppHeight } = socialFun.actions

export default socialFun.reducer