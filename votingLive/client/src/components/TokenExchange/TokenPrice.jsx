// import { ethers } from "ethers";
// import { useEffect ,useState} from "react";

// const TokenPrice = ({contractInstance}) => {
//     // console.log(contractInstance)
//     const [tokenPrice,setTokenPrice] =useState(null);
//     useEffect(()=>{
//         const fetchTokenPrice = async()=>{
//             const tokenPriceWei = await contractInstance.tokenPrice();
//             const tokenPriceEth = ethers.formatEther(tokenPriceWei);
//             console.log(tokenPriceWei)
//             setTokenPrice(tokenPriceEth);
//             console.log(tokenPriceEth);
//         }
//         contractInstance && fetchTokenPrice()
//     },[contractInstance])
//     return ( <>Token Price:{tokenPrice} Eth</> );
// }
 
// export default TokenPrice;



import { ethers } from "ethers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TokenPrice = ({ contractInstance }) => {
    const [tokenPrice, setTokenPrice] = useState(null);

    useEffect(() => {
        const fetchTokenPrice = async () => {
            if (!contractInstance) return;
            try {
                const tokenPriceWei = await contractInstance.tokenPrice();
                const tokenPriceEth = ethers.formatEther(tokenPriceWei);
                const formattedEther = parseFloat(tokenPriceEth).toFixed(3);
                setTokenPrice(formattedEther);
                console.log("Token Price in Wei:", tokenPriceWei);
                console.log("Token Price in Eth:", tokenPriceEth);
            } catch (error) {
                console.error("Error fetching token price:", error);
                toast.error("Error fetching token price");
            }
        };
        fetchTokenPrice();
    }, [contractInstance]);

    if (!contractInstance) {
        return <div>Loading...</div>;
    }

    return (
        <>
            Token Price: {tokenPrice} Eth
        </>
    );
};

export default TokenPrice;
