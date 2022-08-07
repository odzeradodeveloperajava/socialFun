import { createSlice } from '@reduxjs/toolkit'

export const socialFun = createSlice({
  name: 'socialFun',
  initialState: {
    cats: [],
    isLoggedIn: false,
    userEmail: 'none',
    errorCode: '',
  },
  reducers: {
    addCat: (state, action) => {
      state.cats.push(action.payload)
    },
    toggleUserIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setLoggedUserEmail: (state, action) => {
      state.userEmail = action.payload
    },
    setErrorCode: (state, action) => {
      state.errorCode = action.payload
    }
  },
})

export const { addCat, toggleUserIsLoggedIn, setLoggedUserEmail, setErrorCode } = socialFun.actions

export default socialFun.reducer