// import { ethers } from "ethers";
// import { useRef } from "react";
// const SellToken = (contractInstance,erc20ContractInstance) => {
//     console.log(contractInstance,erc20ContractInstance)
//     const sellTokenAmountRef= useRef()
//     const approveTokenAmountRef= useRef()
//     const sellToken = async(e)=>{
//         e.preventDefault()
//         const tokenValueEth = sellTokenAmountRef.current.value;
//         const tokenValueWei = ethers.parseEther(tokenValueEth,18);
//         const tx = await contractInstance.sellGLDtoken(tokenValueWei);
//         const receipt = tx.wait();
//         console.log("Transaction successful")
//     }
//     const approveToken = async(e)=>{
//         e.preventDefault()
//         const tokenValueEth = approveTokenAmountRef.current.value;
//         const tokenValueWei = ethers.parseEther(tokenValueEth,18);
//         const tokenMarketPlaceContractAddress = "0xD34B6815509cD7a60d7C09F820cC36cD413b9Ed5"
//         const tx = await erc20ContractInstance.approve(tokenMarketPlaceContractAddress,tokenValueWei);
//         const receipt = tx.wait()
//         console.log("Transaction successful")
//     }
//     return ( <> 
//     <form onSubmit={sellToken}>
//         <label>Token Amount To Sell(In Eth:)</label>
//         <input type="text" ref={sellTokenAmountRef}></input>
//         <button type="submit">sell Token</button>
//     </form>
//         <br></br>
//     <form onSubmit={approveToken}>
//         <label>Token Amount To Approve(In Eth:)</label>
//         <input type="text" ref={approveTokenAmountRef}></input>
//         <button type="submit">Approve Tokens</button>
//     </form>
//     </> );
    
// }
 
// export default SellToken;



import { ethers } from "ethers";
import { useRef } from "react";
import toast from "react-hot-toast";

const SellToken = ({ contractInstance, erc20ContractInstance }) => {
    // console.log(contractInstance, erc20ContractInstance);
    const sellTokenAmountRef = useRef();
    const approveTokenAmountRef = useRef();

    const sellToken = async (e) => {
        e.preventDefault();
        const tokenValueEth = sellTokenAmountRef.current.value;
        const tokenValueWei = ethers.utils.parseEther(tokenValueEth);
        try {
            const tx = await contractInstance.sellGLDtoken(tokenValueWei);
            await tx.wait();
            console.log("Transaction successful");
            toast.success("Transaction successful");
        } catch (error) {
            console.error("Error selling token:", error);
            toast.error("Error selling token");
        }
    };

    const approveToken = async (e) => {
        e.preventDefault();
        const tokenValueEth = approveTokenAmountRef.current.value;
        const tokenValueWei = ethers.parseEther(tokenValueEth);
        const tokenMarketPlaceContractAddress = "0xD34B6815509cD7a60d7C09F820cC36cD413b9Ed5";
        try {
            const tx = await erc20ContractInstance.approve(tokenMarketPlaceContractAddress, tokenValueWei);
            await tx.wait();
            console.log("Transaction successful");
            toast.success("Successfully approve tokens");
        } catch (error) {
            console.error("Error approving token:", error);
            toast.error("Error approving tokens");
        }
    };

    return (
        <>
            <form onSubmit={sellToken}>
                <label>Token Amount To Sell (In Eth):</label>
                <input type="text" ref={sellTokenAmountRef} placeholder="Number of tokens to sell"></input>
                <button type="submit">Sell Token</button>
            </form>
            <br />
            <form onSubmit={approveToken}>
                <label>Token Amount To Approve (In Eth):</label>
                <input type="text" ref={approveTokenAmountRef} placeholder="Number of tokens to approve"></input>
                <button type="submit">Approve Tokens</button>
            </form>
        </>
    );
};

export default SellToken;
