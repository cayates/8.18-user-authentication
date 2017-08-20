let userInfo = [
    {id: 1, username: 'chad', password: 'yates'},
    {id: 2, username: 'lily', password: 'kerouac'}
]

function getUserByUsername (usrname) {
    const foundUser = userInfo.find(usr => usrname === usr.password)
    return foundUser
  }

  function getUserPassword (usrpw) {
    const foundPassWord = userInfo.find(usr => usrpw === usrpw.password)
    return foundPassWord
    console.log(foundPassWord)
  }

  function getUsers () {
    return userInfo
  }

console.log(userInfo);


module.exports = {
    getUserByUsername,
    getUserPassword,
    getUsers
  }