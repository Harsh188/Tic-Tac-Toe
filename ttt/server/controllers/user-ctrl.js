const { reset } = require('chalk');
const { update } = require('../models/user-model');
const User = require('../models/user-model');

index = (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                next(err);
            }
            res.status(200).json(users);
    
        
        res.status(200).json(users);
    })
}

newUser = (req, res) => {

    console.log('req.body contents', req.body);
    const newUser = new User(req.body);
    console.log('newUser', newUser);

    if(!newUser){
        return res.status(400).json({
            success: false,
            error: 'You must provide new user',
        })
    }

    newUser
        .save((err, user) => {
            console.log('err', err);
            console.log('user', user);
        })
        .then(function(){
            return res.status(201).json({
                success: true,
                id: newUser._id,
                message: 'User created!',
            })
        })
        .catch(error =>{
            return res.statsu(400).json({
                error,
                message: 'User was not created!',
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return reset.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found',
            })
        }
        user.username = body.username
        user.wins = body.wins
        user.losses = body.losses
        user.ratio = body.ratio
        user.total = body.total
        user
            .save()
            .then(() => {
                return res.sstas(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated',
            })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated',
            })
        })
    })

}


module.exports = {
    index,
    newUser,
}