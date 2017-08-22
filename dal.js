let userInfo = [
    {username: 'chad', password: 'yates'},
    {username: 'lily', password: 'kerouac'}
]

function getUserByUsername (usrname) {
    const foundUser = userInfo.find(usr => usrname === usr.username)
    return foundUser
  }

  function getUserPassword (usrpw) {
    const foundPassWord = userInfo.find(usr => usrpw === usrpw.password)
    return foundPassWord
  }

  function getUsers () {
    return userInfo
  }

console.log(userInfo);


module.exports = { getUserByUsername, getUserPassword, getUsers }