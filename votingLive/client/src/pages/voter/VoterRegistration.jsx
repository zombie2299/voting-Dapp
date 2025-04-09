import { useWeb3Context } from "../../context/useWeb3Context";
import axios from "axios";
import { useRef,useState,useEffect} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const VoterRegistration = () => {
    
    const nameRef = useRef();
    const ageRef = useRef();
    const maleRef = useRef();
    const femaleRef = useRef();
    const otherRef = useRef();
    const {web3State}= useWeb3Context();
    const {contractInstance}= web3State;
    const [file,setFile] = useState("")
    const token = localStorage.getItem("token");
    const navigateTo = useNavigate()
    useEffect(()=>{
        if(!token){
            navigateTo("/")
        }
    },[navigateTo,token])
    
    const uploadFile = async()=>{
        try {
            const formData = new FormData();
            formData.append("file", file);
            const token = localStorage.getItem("token");
            const config ={
                headers:{

                    'x-access-token':token
                }
            }
        
            const  res = await axios.post(`http://localhost:3000/api/postVoterImage`, formData,config);
            if(res.data.message === "Image upload successful"){
                toast.success("Image uploaded successfully");
            }
        }
            catch(error){
                toast.error("Image upload failed!!!");
            }
    }
    const handleVoterRegistration = async(e)=>{
       
        try{ 
            e.preventDefault()
            const name=nameRef.current.value;
            const age = ageRef.current.value;
            let gender;
            if(maleRef.current.checked){
                gender=0
            }else if(femaleRef.current.checked){
                gender=1
            }else{
                gender=2
            }
            if(name === "" || age === "" || gender === ""){
                throw new error ("Input fields cannot be empty");
            }
            
            const tx = await contractInstance.voterRegister(name,age,gender);
            const receipt = await tx.wait();
            console.log(receipt);
            if(receipt.status ===1){
                toast.success("Voter registration successful");
                await uploadFile();
            }

            nameRef.current.value="";
            ageRef.current.value="";
           
        } catch (error) {
            if(error.message.includes("Voter already registerd")){
                toast.error("Voter already registerd"); 
            }else if(error.message.includes("You are not eligible")){
                 toast.error("You are not eligible to vote");
            }
            console.error("Error uploading image:", error.response ? error.response.data : error.message);
        }
      }

    return (  <div>
        <form onSubmit={handleVoterRegistration}>
            <label>Voter Name:</label>
            <input type="text" placeholder="Voter Name" ref={nameRef}></input>
            <label>Voter Age:</label>
            <input type="text" placeholder="Voter Age" ref={ageRef}></input>
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
            <button type="submit"> Voter Register</button>
            <br></br>
            
        </form>
        <br></br>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}></input>
        {/* <button onClick={handleUploadImage}>Upload Image</button> */}
        
    </div>);
}
 
export default VoterRegistration;