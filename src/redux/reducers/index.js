import { createSlice } from '@reduxjs/toolkit'

export const socialFun = createSlice({
  name: 'socialFun',
  initialState: {
    cats: [],
    isLoggedIn: false,
    userDetails: 'none',
    userName: '',
    errorCode: '',
  },
  reducers: {
    addCat: (state, action) => {
      state.cats.push(action.payload)
    },
    toggleUserIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setLoggedUserDetails: (state, action) => {
      console.log('ustawiam')
      state.userDetails = action.payload
    },
    setErrorCode: (state, action) => {
      state.errorCode = action.payload
    }
  },
})

export const { addCat, toggleUserIsLoggedIn, setLoggedUserDetails, setErrorCode } = socialFun.actions

export default socialFun.reducer