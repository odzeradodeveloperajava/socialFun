const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const emailValidator = (email) =>{
    if(email.match(validRegex)){
        return true
    } else {
        return false
    }
}
export default emailValidator