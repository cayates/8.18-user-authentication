let userInfo = [
    {username: 'Chad', password: 'yates'},
    {username: 'lily', password: 'kerouac'},
    {username: 'bro', password: 'monkey'}
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

// function switchStatus(){
//   let loggedIn = false
//   if (userInfo.username === req.body.username && userInfo.password === req.body.password){
//     loggedIn = true
//   } else {
//     loggedIn = false
//   }
// }

console.log(userInfo);


module.exports = { getUserByUsername, getUserPassword, getUsers }