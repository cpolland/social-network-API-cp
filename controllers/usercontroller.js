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
    },
    editUser (req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            { runValidators: true, new: true }
        )
            .then((User)=> {
                if(!User){
                    return res.status(404).json({ message: 'No User found' });    
                }
                res.json(User);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteUser (req,res) {
        User.findOneAndDelete(
            {_id: req.params.userId})
            
            .then((User)=> {
                if(!User) {
                    return res.status(404).json({message:'No ouser found'});
                }
            })
    },
    addFriend (req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            {new: true})
            .then((User) => {
                if(!User) {
                return res.status(404).json({message: 'No User found.'}) 
                }
                res.json(User);
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).json(err);
            });

    },
    removeFriend(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {new: true})
            .then((User) => {
                if(!User){
                    return res.status(404).json({message:'No user found.'});
                }
                res.json(User);
            })
    }
}


module.exports = userController