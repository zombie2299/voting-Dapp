const express = require('express');
const router = express.Router();
const CandidateModel = require('../models/candidate');
const multerConfig=require ('../config/multerConfig');
const {authentication }= require('../middleware/authentication');
router.post('/postCandidateImage',authentication,multerConfig.uploadCandidate,async (req, res) => {
    // const token = req.headers['x-access-token']
    try {
        const {accountAddress} = req; 
        const imageName = req.file.filename;
         await CandidateModel.create({
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