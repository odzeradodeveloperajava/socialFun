import { createSlice } from '@reduxjs/toolkit'

export const socialFun = createSlice({
  name: 'socialFun',
  initialState: {
    testValue : 'x',
    cats: [],
    value: 0,
  },
  reducers: {
    addCat: (state, action) => {
      state.cats.push(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCat, decrement, incrementByAmount } = socialFun.actions

export default socialFun.reducer