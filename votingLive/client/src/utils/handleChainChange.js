export const handleChainChange =async (setWeb3State)=>{
    let chainIdHex = await window.ethereum.request({
        method:'eth_chainId'
    })
    let chainId = parseInt(chainIdHex,16);
    setWeb3State ({chainId});
}