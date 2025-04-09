
import toast from "react-hot-toast";
import { useWeb3Context } from "../../context/useWeb3Context";
const AnnouceResult = () => {
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State; 
    
    
        const announceResult = async()=>{
            try {
                const tx = await contractInstance.result();
                const receipt = tx.wait()
                toast.success("Result announced")
            } catch (error) {
                toast.error("Error fetching announce result")
                console.error(error.message);
            }
           
        }
    return (<button onClick={announceResult}>Announce Result</button> );
}
 
export default AnnouceResult;