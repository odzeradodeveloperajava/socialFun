import { configureStore } from '@reduxjs/toolkit';
import socialFun from '../reducers'

export default configureStore({
  reducer: {
     socialFun: socialFun,
    },
})