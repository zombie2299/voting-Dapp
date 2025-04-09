import { Web3Context } from "../../context/web3Context";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3Context } from "../../context/useWeb3Context";
import axios from "axios";
import toast from "react-hot-toast";
const CandidateRegistration = () => {
    const token = localStorage.getItem("token");
    const navigateTo = useNavigate()
    useEffect(()=>{
        if(!token){
            navigateTo("/")
        }
    },[navigateTo,token])
    const {web3State}= useWeb3Context();
    const {contractInstance}= web3State;
    const [file,setFile]=useState("");
    const nameRef = useRef();
    const ageRef = useRef();
    const maleRef = useRef();
    const femaleRef = useRef();
    const otherRef = useRef();
    const partyRef = useRef();

    const uploadFile=async()=>{
        try {
            const formData = new FormData();
            formData.append("file", file);
            
            const config ={
                headers:{

                    'x-access-token':token
                }
            }
           const res =  await axios.post(`http://localhost:3000/api/postCandidateImage`, formData,config);
           console.log("this is response after calling server ");
           if(res.data.message==="Image upload successful"){
            console.log("this is response after data.message");
            toast.message("Image uploaded successfully");
           }
        } 
        catch (error) {
            toast.error("Image upload failed!!");
        }
      
        }

    const handleCandidateRegistration = async(e)=>{
       
        try {
            e.preventDefault()
            const name=nameRef.current.value;
            const age = ageRef.current.value;
            const party = partyRef.current.value;
            let gender;
            if(maleRef.current.checked){
                gender=0
            }else if(femaleRef.current.checked){
                gender=1
            }else{
                gender=2
            }
            // console.log(gender);
            if(name=== "" || age === "" || gender ==="" || party ===""){
                throw new error ("Input fields cannot be empty")
            }
            const tx = await contractInstance.candidateRegister(name,party,age,gender);
            const receipt = await tx.wait();
            console.log(receipt);
            if(receipt.status===1){
                await uploadFile()
            }
            nameRef.current.value="";
            ageRef.current.value="";
            
            partyRef.current.value="";
        } catch (error) {
            console.error("Error uploading image:", error.response ? error.response.data : error.message);
            toast.error("Candidate registration failed")
        }

       
    }   
        
    return (  <div>
        <form onSubmit={handleCandidateRegistration}>
            <label>Candidate Name:</label>
            <input type="text" placeholder="Candidate Name" ref={nameRef}></input>
            <label>Candidate Age:</label>
            <input type="text" placeholder="Candidate Age" ref={ageRef}></input>
         
            <label>Gender</label>
            <div>
                <input type="radio" id = "male" name = "gender" value="male" ref={maleRef}/>
                <label htmlFor= "male">Male</label>
            </div>
            <div>
                <input type="radio" id = "female" name = "gender" value="female" ref={femaleRef}/>
                <label htmlFor= "female">Female</label>
            </div>
            <div>
                <input type="radio" id = "other" name = "gender" value="other" ref={otherRef}/>
                <label htmlFor= "other">Other</label>
            </div>
            <label>Candidate Party:</label>
            <input type="text" placeholder="Candidate Party" ref={partyRef}></input>
            <button type="submit">Register</button>
            <br></br>
        </form>
        <br></br>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}></input>
        {/* <button onClick={handleUploadImage}>Upload Image</button> */}
    </div>);
}
 
export default CandidateRegistration;