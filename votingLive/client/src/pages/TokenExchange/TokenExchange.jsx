// import BuyToken from "../../components/TokenExchange/BuyToken";
// import SellToken from "../../components/TokenExchange/SellToken";
// import TokenBalance from "../../components/TokenExchange/TokenBalance";
// import TokenPrice from "../../components/TokenExchange/TokenPrice";
// import { useWeb3Context } from "../../context/useWeb3Context";
// import { useEffect,useState } from "react";
// import tokenExchangeAbi from "../../constants/tokenExchangeAbi.json";
// import { ethers } from "ethers";


// const TokenExchange = () => {
//     const [tokenExchangeContractInstance,setTokenExchangeContractInstance]=useState(null);
//     const {web3State} = useWeb3Context();
//     const {signer} = web3State;
//      useEffect = ( () =>{ 
//         const tokenExchangeInit = ()=>{
//         const tokenExchangeContracAddress ="0xB3084c513197A2c39cbfB946D1A6208277F80Bd5";
//         const tokenExchangeContractInstance= new ethers.Contract(tokenExchangeContracAddress,tokenExchangeAbi,signer);
//         setTokenExchangeContractInstance(tokenExchangeContractInstance);
//         console.log(tokenExchangeContractInstance);
//         }
//         signer && tokenExchangeInit()
//     },[signer])
//     return ( <> 
//     <BuyToken/>
//     <br/>
//     <SellToken contractInstance={tokenExchangeContractInstance}/>
//     <br/>
//     <TokenBalance contractInstance={tokenExchangeContractInstance}/>
//     <br/>
//     <TokenPrice contractInstance={tokenExchangeContractInstance}/>
//      </> );
// }
 
// export default TokenExchange;






// import BuyToken from "../../components/TokenExchange/BuyToken";
// import SellToken from "../../components/TokenExchange/SellToken";
// import TokenBalance from "../../components/TokenExchange/TokenBalance";
// import TokenPrice from "../../components/TokenExchange/TokenPrice";
// import { useWeb3Context } from "../../context/useWeb3Context";
// import { useEffect, useState } from "react";
// import tokenExchangeAbi from "../../constants/tokenExchangeAbi.json";
// import erc20abi from "../../constants/erc20abi.json";
// import { ethers } from "ethers";

// const TokenExchange = () => {
//     const [tokenExchangeContractInstance, setTokenExchangeContractInstance] = useState(null);
//     const [erc20ContractInstance, setErc20ContractInstance] = useState(null);
//     const { web3State } = useWeb3Context();
//     const { signer,provider} = web3State;

//     useEffect(()=>{
//         const   erc20TokenInit = ()=>{
//             const contractAddress = "0xB3084c513197A2c39cbfB946D1A6208277F80Bd5"; //token contract address
//             const erc20ContractInstance = new ethers.Contract(contractAddress,erc20abi,provider);
//             setErc20ContractInstance(erc20ContractInstance)
//         }
//         provider && erc20TokenInit()
//     },[provider])

//     useEffect(() => {
//         const tokenExchangeInit = () => {
//             const tokenExchangeContractAddress = "0xD34B6815509cD7a60d7C09F820cC36cD413b9Ed5"; //tokenMarketplace contract address
//             const tokenExchangeContractInstance = new ethers.Contract(tokenExchangeContractAddress, tokenExchangeAbi, signer);
//             setTokenExchangeContractInstance(tokenExchangeContractInstance);
            
//         };
//         if (signer) {
//             tokenExchangeInit();
//         }
//     }, [signer]);

//     return (
//         <>
//             <BuyToken contractInstance={tokenExchangeContractInstance}/>
//             <br />
//             <SellToken erc20ContractInstance={erc20ContractInstance} contractInstance={tokenExchangeContractInstance} />
//             <br />
//             <TokenBalance erc20ContractInstance={erc20ContractInstance}  />
//             <br />
//             <TokenPrice contractInstance={tokenExchangeContractInstance} />
//         </>
//     );
// };

// export default TokenExchange;





// import BuyToken from "../../components/TokenExchange/BuyToken";
// import SellToken from "../../components/TokenExchange/SellToken";
// import TokenBalance from "../../components/TokenExchange/TokenBalance";
// import TokenPrice from "../../components/TokenExchange/TokenPrice";
// import { useWeb3Context } from "../../context/useWeb3Context";
// import { useEffect, useState } from "react";
// import tokenExchangeAbi from "../../constants/tokenExchangeAbi.json";
// import erc20abi from "../../constants/erc20abi.json";
// import { ethers } from "ethers";

// const TokenExchange = () => {
//     const [tokenExchangeContractInstance, setTokenExchangeContractInstance] = useState(null);
//     const [erc20ContractInstance, setErc20ContractInstance] = useState(null);
//     const { web3State } = useWeb3Context();
//     const { signer, provider } = web3State;

//     useEffect(() => {
//         const erc20TokenInit = () => {
//             const contractAddress = "0xB3084c513197A2c39cbfB946D1A6208277F80Bd5"; // token contract address
//             const erc20ContractInstance = new ethers.Contract(contractAddress, erc20abi, provider);
//             setErc20ContractInstance(erc20ContractInstance);
//             console.log("ERC20 Contract Instance:", erc20ContractInstance); // Log the contract instance
//         };
//         provider && erc20TokenInit();
//     }, [provider]);

//     useEffect(() => {
//         const tokenExchangeInit = () => {
//             const tokenExchangeContractAddress = "0xD34B6815509cD7a60d7C09F820cC36cD413b9Ed5"; // tokenMarketplace contract address
//             const tokenExchangeContractInstance = new ethers.Contract(tokenExchangeContractAddress, tokenExchangeAbi, signer);
//             setTokenExchangeContractInstance(tokenExchangeContractInstance);
//             console.log("Token Exchange Contract Instance:", tokenExchangeContractInstance); // Log the contract instance
//         };
//         if (signer) {
//             tokenExchangeInit();
//         }
//     }, [signer]);

//     return (
//         <>
//             <BuyToken erc20ContractInstance={erc20ContractInstance} />
//             <br />
//             <SellToken erc20ContractInstance={erc20ContractInstance} contractInstance={tokenExchangeContractInstance} />
//             <br />
//             <TokenBalance erc20ContractInstance={erc20ContractInstance} />
//             <br />
//             <TokenPrice contractInstance={tokenExchangeContractInstance} />
//         </>
//     );
// };

// export default TokenExchange;




import BuyToken from "../../components/TokenExchange/BuyToken";
import SellToken from "../../components/TokenExchange/SellToken";
import TokenBalance from "../../components/TokenExchange/TokenBalance";
import TokenPrice from "../../components/TokenExchange/TokenPrice";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useEffect, useState } from "react";
import tokenExchangeAbi from "../../constants/tokenExchangeAbi.json";
import erc20abi from "../../constants/erc20abi.json";
import { ethers } from "ethers";

const TokenExchange = () => {
    const [tokenExchangeContractInstance, setTokenExchangeContractInstance] = useState(null);
    const [erc20ContractInstance, setErc20ContractInstance] = useState(null);
    const { web3State } = useWeb3Context();
    const { signer, provider } = web3State;

    useEffect(() => {
        const erc20TokenInit = () => {
            const contractAddress = "0xe4C7863B4e254D4B00859C30e7eBB0aE3d573487"; // token contract address
            const erc20ContractInstance = new ethers.Contract(contractAddress, erc20abi, provider);
            setErc20ContractInstance(erc20ContractInstance);
            // console.log("ERC20 Contract Instance:", erc20ContractInstance); // Log the contract instance
        };
        provider && erc20TokenInit();
    }, [provider]);

    useEffect(() => {
        const tokenExchangeInit = () => {
            const tokenExchangeContractAddress = "0x8ab567362bB151507a288e17B605b67642B97daC"; // tokenMarketplace contract address
            const tokenExchangeContractInstance = new ethers.Contract(tokenExchangeContractAddress, tokenExchangeAbi, signer);
            setTokenExchangeContractInstance(tokenExchangeContractInstance);
            // console.log("Token Exchange Contract Instance:", tokenExchangeContractInstance); // Log the contract instance
        };
        if (signer) {
            tokenExchangeInit();
        }
    }, [signer]);

    return (
        <>
            <BuyToken contractInstance={tokenExchangeContractInstance} />
            <br />
            <SellToken erc20ContractInstance={erc20ContractInstance} contractInstance={tokenExchangeContractInstance} />
            <br />
            <TokenBalance erc20ContractInstance={erc20ContractInstance} />
            <br />
            <TokenPrice contractInstance={tokenExchangeContractInstance} />
        </>
    );
};

export default TokenExchange;
