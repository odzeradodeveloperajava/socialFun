import React, {useEffect, useState} from 'react'
import axios from 'axios'


const LoginScreenAuth = () => {


   const [loginPage, setLoginPage] =  useState(null)
   const getPage = async() => await axios.get('https://socialback.bieda.it/profile').then((res)=> {
    console.log(res.data);
    }).catch((err)=>{
        setLoginPage(err.response.data)
    })
   //const make = async() => console.log(await getPage())
   const make = getPage()
   
  return (
    loginPage
    //null
  )
}

export default LoginScreenAuth