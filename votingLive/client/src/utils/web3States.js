import {ethers} from "ethers";
import abi from "../constants/abi.json";
import axios from "axios"
import {toast} from "react-hot-toast";

// 0x4CCf04080D68D140b9Ef22a922E690CfE6c59B7e

export const getWeb3State = async() =>{
    let [contractInstance,selectedAccount,chainId]=[null,null,null];
    try {
        if(!window.ethereum){
            throw new error ("Metamask is not installed");
        }
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts' //method for calling ethereum accounts in metamask
        })
        let chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
        })
        chainId = parseInt(chainIdHex,16);
        selectedAccount = accounts[0];
        // read operation
        const provider = new ethers.BrowserProvider(window.ethereum);
        // write operation
        const signer = await provider.getSigner();
        const message = "You accept the terms and conditions of voting dapp";
        const signature = await signer.signMessage(message);
        const dataSignature={
            signature
        }
        const res = await axios.post(`http://localhost:3000/api/authentication?accountAddress=${selectedAccount}`,dataSignature);
        localStorage.setItem("token",res.data.token);
        const contractAddress = "0x65b78747C844E309eA789F74F83fA0B8CfB84fA4"; // voting smart contract address
        contractInstance = new ethers.Contract(contractAddress,abi,signer);
        toast.success("Signed in successfully!!!");
        console.log("connected");
        return{contractInstance,chainId,selectedAccount,provider,signer};
        
    } catch (error) {
        console.error("Not able to get web3 state",error.message);
        throw error;
    }
    
}