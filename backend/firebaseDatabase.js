const firebaseInit = require('./firebaseInit')
const { getDatabase, ref, onValue, set} = require("firebase/database")
const db = getDatabase(firebaseInit)




const createUser = (userName, email) => set(ref(db, 'users/' + email.replace(/\./g, '%2E')),{
    userName,
})

const readUser =  (user) => {
    const refx = ref(db, 'users/'+user.replace(/\./g, '%2E'));
    onValue(refx, (snapshot)=> {
        console.log('xxxx '+snapshot.val().userName)
        return snapshot.val().userName
    })

}




module.exports = {
    createUser, readUser
}