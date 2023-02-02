const router = require('express').Router();
const {
 getAllThoughts,
 createThought,
 createUser,
 getAllUsers,
} = require('../../controllers/thoughtsContorller.js');


router.route('/').get(getAllUsers).post(createUser);


router
  .route('/:userID')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
