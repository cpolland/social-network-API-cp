const { User, Thought } = require('../models');

const thoughtController = {

    getThoughts(req,res) {
        Thought.find({})
            .populate('thoughts')
            .populate('friends')
            .then(responds => {
                res.json(responds)
            }).catch(err => {
            res.status(500).json(err)
            })
    },
    getThoughtById(req,res) {
        Thought.findOne({_id:req.params.userId})
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            .then(responds => {
                res.json(responds)
            }).catch(err => {
            res.status(500).json(err)
            })
    },
    
}
module.exports = thoughtController