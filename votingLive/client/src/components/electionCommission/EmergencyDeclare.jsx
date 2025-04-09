
import toast from "react-hot-toast";
import { useWeb3Context } from "../../context/useWeb3Context";
const EmergencyDeclare = () => {
    const {web3State}= useWeb3Context();
    const {contractInstance} = web3State;
        const DeclareEmergency = async()=>{
            try {
                const tx = await contractInstance.emeregency();
                const receipt = tx.wait()
                toast.success("Emergency declared");
            } catch (error) {
                toast.error("Error fetching emergency status ");
                console.error(error.message);
            }
           
        } 

    return ( 
       <button onClick={DeclareEmergency}>Emergency Declared</button>
     );
}
 
export default EmergencyDeclare;