import {useState, useEffect } from "react";
import {useWeb3Context} from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
const VoterList = () => {
    const token = localStorage.getItem("token");
    const navigateTo = useNavigate()
    useEffect(()=>{
        if(!token){
            navigateTo("/")
        }
    },[navigateTo,token])
    // const {contractInstance}= useWeb3Context();
    const {web3State}= useWeb3Context();
    const {contractInstance}= web3State;
    const [voterList,setVoterList] = useState([])
    useEffect(()=>{
        const DisplayVoterList = async()=>{
            try {
                const VoterArray =await contractInstance.voterList();
                // const VoterString = VoterArray.toString()
                setVoterList(VoterArray)
                
            } catch (error) {
                console.log(error.message);
            }
        }
        contractInstance && DisplayVoterList()
    },[contractInstance])
   
    return ( <div>
        {voterList.length!==0?(
            voterList.map((voter)=>{
                return(
                    <ul key={voter.voterId}>
                        <li>{voter.name}</li>
                        <li>{String(voter.age)}</li>
                        <li>{voter.voterAddress}</li>
                        <img src={`http://localhost:3000/images/VoterImage/${voter.voterAddress}`}></img>
                    </ul>
                )
            })
        ):(
            <p> No Voters found </p>
        )}
    </div> );
}
 
export default VoterList;