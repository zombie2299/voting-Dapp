const express = require('express');
const router = express.Router();
const VoterModel = require('../models/voter');
const multerConfig=require ('../config/multerConfig');
const {authentication }= require('../middleware/authentication');
router.post('/postVoterImage',authentication,multerConfig.uploadVoter,async (req, res) =>{
    // const token = req.headers['x-access-token']
    // console.log(token);
    // console.log("this is from postVoter Image:",req.accountAddress);
        try {
            // const { accountAddress } = req.query;
            const {accountAddress} = req; 
            const imageName = req.file.filename;
            await VoterModel.create({
                accountAddress,
                imageName
            });
            res.status(201).json({message:"Image upload successful"});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

});

module.exports=router;