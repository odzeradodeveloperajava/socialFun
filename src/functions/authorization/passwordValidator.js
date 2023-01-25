const passwordValidator = (password, repeatedPassword) =>{
    if(password === repeatedPassword){
        return true
    } else {
        return false
    }
}
export default passwordValidator