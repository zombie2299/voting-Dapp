import VotingStartForm from "../../components/electionCommission/VotingStartForm";
import DisplayWinner from "../../components/electionCommission/DisplayWinner";
import VotingStatus from "../../components/electionCommission/VotingStatus";
import AnnounceResult from "../../components/electionCommission/AnnounceResult";
import EmergencyDeclare from "../../components/electionCommission/EmergencyDeclare";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const electionCommission = () => {
    const token = localStorage.getItem("token");
    const navigateTo = useNavigate()
    useEffect(()=>{
        if(!token){
            navigateTo("/")
        }
    },[navigateTo,token])
    return (<>
    <VotingStartForm/>
    <br></br>
    <DisplayWinner/>
    <br></br>
    <VotingStatus/>
    <br></br>
    <AnnounceResult/>
    <br></br>
    <br></br>
    <EmergencyDeclare/>
    <br></br>
    </>  );
}
 
export default electionCommission;