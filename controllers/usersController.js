const {Thoughts, Users} = require('../models');
const usersControler = {
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: ('-__v')
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    createUser({ body }, res) {
        console.log("BODY OBJECT", body)
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

}