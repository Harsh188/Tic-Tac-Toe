const { reset } = require('chalk');
const { update } = require('../models/user-model');
const User = require('../models/user-model');

function roundOff(n) {
 if ((typeof n !== 'number') || (typeof 2 !== 'number'))
   return false;
    	n = parseFloat(n) || 0;
	return n.toFixed(2);
	}

index = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            next(err);
        }
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
        .save()
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
        if(!user){
            return res
                .status(404)
                .json({success: false, error: `User not found`})
        }
        // user.username = body.username
        user.wins = user.wins + body.wins
        user.losses = user.losses + body.losses
        user.ratio = roundOff(user.wins / user.losses)
        user.total = user.wins + user.losses
        user
            .save()
            .then(() => {
                return res.status(200).json({
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

getUserByUsername = async(req, res) =>{
    await User.findOne({username: req.params.username}, (err, user)=>{
        if(err){
            return res.status(400).json({success: false, error:err})
        }

        if(!user){
            return res
                .status(404)
                .json({success: false, error: `User not found`})
        }
        return res.status(200).json({success: true, data: user})
    }).catch(err => console.log(err))
}



module.exports = {
    index,
    newUser,
    getUserByUsername,
    updateUser
}