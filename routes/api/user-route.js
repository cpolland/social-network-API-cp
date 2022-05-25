const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
    addFriend,
    // removeFriend,
  } = require('../../controllers/usercontroller');

  // /api/user
  router.route('/').get(getUsers).post(createUser)
  // /api/user/:userId
  router.route('/:userId').get(getUserById).put(editUser).delete(deleteUser)
//   // /api/user/:userId/friends/:friendId
//   router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router
  