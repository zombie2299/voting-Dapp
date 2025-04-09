const jwt = require('jsonwebtoken');

const authentication = async(req,res,next)=>{
    const token = req.headers['x-access-token']
    // console.log(token)
    if(!token) return res.status(500).json({error:"Authentication failed!!!"})

        try {
            const decoded = jwt.verify(token,'secretkey')
            req.accountAddress= decoded.accountAddress;
            next()
        } catch (error) {
            return res.status(500).json({error:"Authentication failed!!!"})
        }
    }
    module.exports={authentication}