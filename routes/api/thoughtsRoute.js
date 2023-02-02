const router = require('express').Router();
const {
 getAllThoughts,
 createThought,
 createUser,
 getAllUsers,
} = require('../../controllers/thoughtsContorller.js');


router.route('/').get(getAllThoughts).post(createThought);

router
  .route('/:thoughtsID')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
