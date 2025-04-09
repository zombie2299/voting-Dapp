// import { ethers } from "ethers";
// import { useRef } from "react";
// const BuyToken = ({contractInstance}) => {
//     const tokenAmountRef= useRef()
//     // console.log(contractInstance)
//     const buyToken = async(e)=>{
//         e.preventDefault()
//         const tokenValueEth = tokenAmountRef.current.value;
//         const tokenValueWei = ethers.parseEther(tokenValueEth,18);
//         // console.log(tokenValueWei)
//         const tx = await contractInstance.buyGLDtoken(tokenValueWei)
//         const receipt = tx.wait()
//         console.log("Transaction successful")
//     }
//     return ( <> 
//     <form onSubmit={buyToken}>
//         <label>Token Amount To Buy(In Eth:)</label>
//         <input type="text" ref={tokenAmountRef}></input>
//         <button type="submit">Buy Token</button>
//     </form>
//     </> );
// }
 
// export default BuyToken;


import { ethers } from "ethers";
import { useRef } from "react";
import toast from "react-hot-toast";

const BuyToken = ({ contractInstance }) => {
    const tokenAmountRef = useRef();

    const buyToken = async (e) => {
        e.preventDefault();
        try {
            const numberOfTokens = tokenAmountRef.current.value;
            const numberOfTokens18Decimals = ethers.parseUnits(numberOfTokens,18);
            const tokenPriceWei = await contractInstance.tokenPrice();
            const totalTokenPrice = tokenPriceWei * BigInt(numberOfTokens);
            const tx = await contractInstance.buyGLDtoken(numberOfTokens18Decimals,{value:totalTokenPrice});
            await tx.wait();
            console.log("Transaction successful");
            toast.success("Transaction successful");
        } catch (error) {
            console.error("Error buying token:", error);
            toast.error("Error buying token");
        }
    };

    return (
        <>
            <form onSubmit={buyToken}>
                <label>Token Amount To Buy (In Eth):</label>
                <input type="text" ref={tokenAmountRef} placeholder="Number of tokens to buy"></input>
                <button type="submit">Buy Token</button>
            </form>
        </>
    );
};

export default BuyToken;
