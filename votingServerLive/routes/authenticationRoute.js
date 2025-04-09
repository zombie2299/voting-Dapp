const { ethers } = require('ethers');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/authentication",(req,res,next)=>{
const {signature} = req.body;
const {accountAddress}=req.query;

if(!signature || !accountAddress){
    return res.status(500).json({message:"Authentication failed"})
}
    const authenticationMessage = "You accept the terms and conditions of voting dapp";
    const recoveredAddress = ethers.utils.verifyMessage(authenticationMessage,signature);
    if(recoveredAddress.toLowerCase()===accountAddress.toLowerCase()){
       const token= jwt.sign({accountAddress},'secretkey')
        return res.status(200).json({message:"Authentication successful",token:token})
    }
        return res.status(500).json({message:"Authentication failed"})
})
module.exports=router;