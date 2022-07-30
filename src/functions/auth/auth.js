import React from 'react'
import isUserLoggenIn from './isUserLoggenIn'

const auth = async () => {
  
  console.log('czy zalogowany',await isUserLoggenIn())
  return false
}

export default auth