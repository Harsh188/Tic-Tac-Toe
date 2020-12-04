const User = require('../models/user-model');

index = (req, res, next) => {
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


module.exports = {
    index,
    newUser,
}