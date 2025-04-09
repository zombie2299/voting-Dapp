// const express = require('express');
// const app = express();
// const connectDB = require('./db/connect')
// const CandidaateModel=require('./models/candidate')
// require('dotenv').config()

// connectDB(process.env.MONGO_URL).then(()=>console.log("connected to DB"))
// app.use(express.json())
// app.post('/api/postCandidateImage',async(req,res)=>{
//     try{
//         const {accountAddress,imageName}=req.body;
//         const savedCandidate = await CandidaateModel.create({
//             accountAddress,
//             imageName
//         });
//         req.status(201).json(savedCandidate);
//     }catch(error){
//         console.error(error)
//     }
    
// })

// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const cors = require ('cors');
const CandidatePostImageRoutes = require('./routes/postCandidateImage');
const VoterPostImageRoutes = require('./routes/postVoterImage');
const authenticationRoutes = require('./routes/authenticationRoute');
const {authentication }= require('./middleware/authentication');
require('dotenv').config();
const path = require ('path');

connectDB(process.env.MONGO_URL).then(() => console.log("connected to DB"));

app.use(express.json());
app.use('/images',express.static(path.join(__dirname,'votingSystem')))
app.use(cors());
app.use('/api',authenticationRoutes);
app.use('/api',authentication,CandidatePostImageRoutes);
app.use('/api',authentication,VoterPostImageRoutes);

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
 