const User = require('../models/user');

module.exports = {
    index: (req, res, next) => {
        User.find({}, (err, users) => {
            if (err) {
                next(err);
            }
            res.status(200).json(users);
    
        
        res.status(200).json(users);
    })
    },

    newUser: (req, res, next) => {
        console.log('req.body contents', req.body);
        const newUser = new User(req.body);
        console.log('newUser', newUser);
        newUser.save((err, user) => {
            console.log('err', err);
            console.log('user', user);
        });
    }
};