// all my functions should go here

let userInfo = [
{id: 1, username: 'chad', password: 'yates'},
{id: 2, username: 'lily', password: 'kerouac'}
]

function getUser (userId) {
    const foundUser = userInfo.find(usr => Number(userId) === usr.id)
    return foundUser
  }

function getUserByUsername (usrname) {
    const foundUser = userInfo.find(usr => usrname === usr.username)
    return foundUser
  }

function getUserPassword (usrpw) {
    const foundUserPW = userInfo.find(usr => usrpw === usr.userpw)
    return foundUserPW
  }

console.log(userInfo);


module.exports = {
    getUser: getUser,
    getUserByUsername: getUserByUsername,
    getUserPassword: getUserPassword
  }