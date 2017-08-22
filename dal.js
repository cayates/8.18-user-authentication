let userInfo = [
    {username: 'chad', password: 'yates'},
    {username: 'lily', password: 'kerouac'}
]

function getUserByUsername (usrname) {
    const foundUser = userInfo.find(usr => usrname === usr.username)
    return foundUser
    console.log(foundUser)
  }

  function getUserPassword (usrpw) {
    const foundPassWord = userInfo.find(usr => usrpw === usr.password)
    return foundPassWord
    console.log(getUserPassword)
  }

  function getUsers () {
    return userInfo
  }

console.log(userInfo);


module.exports = { getUserByUsername, getUserPassword, getUsers }