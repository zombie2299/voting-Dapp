import toast from "react-hot-toast";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useRef } from "react";
const VotingStartForm = () => {
    const {web3State}= useWeb3Context();
    const {contractInstance} = web3State;
    const startTimeRef = useRef();
    const endTimeRef = useRef();
    const timeInSeconds = (time)=>{
        const date = new Date(time)
        return Math.floor(date.getTime()/1000);
    };
    const handleVotingTime = async (e)=>{
        e.preventDefault();
        const startTime = startTimeRef.current.value;
        const endTime = endTimeRef.current.value;
        const startTimesec = timeInSeconds(startTime);
        const endTimeSec = timeInSeconds(endTime);
        try {
            const tx = await contractInstance.voteTime(startTimesec,endTimeSec);
            const receipt = tx.wait();
            toast.success ("voting started")
        } catch (error) {
            toast.error("Error fetching the vote ")
            console.error(error.message);
        }
        console.log(startTimesec,endTimeSec)
     
    }
    return ( 
        <>
        <form onSubmit={handleVotingTime}>
            <label htmlFor="start">Start Time</label>
            <input type="datetime-local"id="start" ref={startTimeRef}></input>
            <label htmlFor="end">End Time</label>
            <input type="datetime-local"id="end" ref={endTimeRef}></input>
            <button>voting start</button>
        </form>
        </>
     );
}
 
export default VotingStartForm;

