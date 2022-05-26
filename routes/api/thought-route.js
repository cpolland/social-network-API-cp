const router = require('express').Router();

const {
    getThoughts,
    getThoughtsById,
    createThought,
    editThought,
    deleteThought,
    addReaction,
    removeReaction,
  } = require('../../controllers/thoughtcontroller.js');

  // /api/thoughts
  // router.route('/').get(getThoughts).post(createThought)
  // /api/thoughts/:userId
  // router.route('/:thoughtId').get(getThoughtsById).put(editThought).delete(deleteThought)
  // /api/thoughts/:userId/friends/:friendId
  // router.route('/:thoughtId/reaction').post(addReaction)
  // router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction)

module.exports = router