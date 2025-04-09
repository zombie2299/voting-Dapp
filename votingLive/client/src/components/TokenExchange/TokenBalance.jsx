
// import {ethers} from "ethers";

// import { useEffect,useState } from "react";

// const TokenBalance = (erc20ContractInstance) => {
//     console.log(erc20ContractInstance)
//     const [userTokenBalance,setUserTokenBalance] = useState("0")
  
//     useEffect(()=>{
//         const fetchTokenBalance = async()=>{
            
//             const TokenBalanceWei = await erc20ContractInstance.balanceOf ("0xB3084c513197A2c39cbfB946D1A6208277F80Bd5");
//             const TokenBalanceEth = ethers.formatEther(TokenBalanceWei);
//             setUserTokenBalance(TokenBalanceEth)

//         }
//         erc20ContractInstance && fetchTokenBalance()
        
//     },[erc20ContractInstance])
//     return ( <>Token Balance:{userTokenBalance}</> );
// }
 
// export default TokenBalance;



import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import toast from "react-hot-toast";

const TokenBalance = ({ erc20ContractInstance }) => {
    // console.log("ERC20 Contract Instance in TokenBalance:", erc20ContractInstance); // Log the contract instance
    const {web3State} = useWeb3Context();
    const {selectedAccount}= web3State;
    const [userTokenBalance, setUserTokenBalance] = useState("0");

    useEffect(() => {
        const fetchTokenBalance = async () => {
            if (!erc20ContractInstance) return;
            try {
                const TokenBalanceWei = await erc20ContractInstance.balanceOf(selectedAccount);
                const TokenBalanceEth = ethers.formatEther(TokenBalanceWei);
                const formattedEther = parseFloat(TokenBalanceEth).toFixed(3);
                setUserTokenBalance(formattedEther);
            } catch (error) {
                console.error("Error fetching token balance:", error);
                toast.error("Error fetching token balance");
            }
        };
        erc20ContractInstance && fetchTokenBalance();
    }, [erc20ContractInstance,selectedAccount]);

    if (!erc20ContractInstance) {
        return <div>Loading...</div>;
    }

    return (
        <>
            Token Balance: {userTokenBalance}
        </>
    );
};

export default TokenBalance;
















































