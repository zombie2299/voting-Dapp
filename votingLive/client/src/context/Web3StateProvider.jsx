import { useState,useEffect } from "react";
import { getWeb3State } from "../utils/web3States";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";
import { Web3Context } from "./web3Context";
const Web3StateProvider = ({children}) => {
    const [web3State,setWeb3State]=useState({
        contractInstance:null,
        chainId:null,
        selectedAccount:null,
        provider:null,
        signer:null
    })
    const handleWallet = async()=>{
        try {
        const {contractInstance,chainId,selectedAccount,provider,signer}= await getWeb3State();
        setWeb3State({contractInstance,chainId,selectedAccount,provider,signer});
        } catch (error) {
            console.error("Wallet connection failed",error.message);
        }
        
    }
    useEffect(()=>{
        handleWallet(); 
        window.ethereum.on('accountChanged',()=>handleAccountChange(setWeb3State))
        window.ethereum.on('chainChanged',()=>handleChainChange(setWeb3State))

        return()=>{
            window.ethereum.removeListener('accountChanged',()=>handleAccountChange(handleWallet))
            window.ethereum.removeListener('chainChanged',()=>handleChainChange(setWeb3State))
        }
    },[])
    return (<div>
        <Web3Context.Provider value={{handleWallet,web3State}}>
            {children}
        </Web3Context.Provider>
         {/* <button onClick={handleWallet}>Connect Wallet</button> */}
    </div>  );
}
 
export default Web3StateProvider;