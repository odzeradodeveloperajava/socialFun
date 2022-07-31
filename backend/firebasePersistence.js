const firebaseInit = require('./firebaseInit')
const { getAuth } = require('firebase/auth')
const { createUser, readUser } = require('./firebaseDatabase')



const auth = getAuth(firebaseInit)


const persistence = async () => {
    const xemail = auth.currentUser.email
    console.log('wczytamy email ', xemail)
    console.log(auth.currentUser !== null ? 'sssss '+ readUser(xemail) : 'nic')
    console.log(auth.currentUser !== null ? auth.currentUser.email : 'nic')
    return (
        auth.currentUser !== null ? {
            email: auth.currentUser.email,
            bbla: 'xla',
            userName: await readUser(auth.currentUser.email)
        } : { email: false}
    )
}

module.exports = {
    persistence
}