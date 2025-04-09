import { useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
const Wallet = () => {
    const navigateTo = useNavigate();
    const {handleWallet,web3State} = useWeb3Context();
    const {selectedAccount}=web3State;

    useEffect(()=>{
        if(selectedAccount){
            navigateTo("/voter-profile")
        }
    },[selectedAccount,navigateTo])
    return ( 
        <div>
            <button onClick={handleWallet}>Connetct Wallet</button>
        </div>
     );
}
 
export default Wallet;
