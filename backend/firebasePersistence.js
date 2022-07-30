const firebaseInit = require('./firebaseInit')
const { getAuth } = require('firebase/auth')

const auth = getAuth(firebaseInit)

const persistence = async () => {
    return (
        auth.currentUser !== null ? { email: auth.currentUser.email } : { email: false}
    )
}


module.exports = {
    persistence
}