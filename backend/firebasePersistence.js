const firebaseInit = require('./firebaseInit')
const { getAuth } = require('firebase/auth')
const { getDatabase, ref, onValue, set} = require("firebase/database")


const auth = getAuth(firebaseInit)
const db = getDatabase(firebaseInit)
console.log('database', db)

set(ref(db, 'users/' + 'xx'),{
    username: 'xxxx'
})

const persistence = async () => {
    return (
        auth.currentUser !== null ? {
            email: auth.currentUser.email,

        } : { email: false}
    )
}


module.exports = {
    persistence
}