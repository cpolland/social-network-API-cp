const { User, Thought } = require('../models');

const userController = {


    getUsers(req,res) {
        User.find({})
            .populate('thoughts')
            .populate('friends')
            .then(responds => {
                res.json(responds)
            }).catch(err => {
            res.status(500).json(err)
            })
    },
    getUserById(req,res) {
        User.findOne({_id:req.params.userId})
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            .then(responds => {
                res.json(responds)
            }).catch(err => {
            res.status(500).json(err)
            })
    },
    createUser(req,res) {
        User.create(req.body)
            .then(responds => {
                res.json(responds)
            }).catch(err => {
            res.status(500).json(err)
            })
    }
}


module.exports = userController