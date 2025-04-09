export const handleAccountChange = async(handleWallet)=>{
    handleWallet()
}




// export const handleAccountChange = async(setWeb3State)=>{
//     const accounts = await window.ethereum.request({
//             method: 'eth_requestAccounts'
// })
// let selectedAccount =  accounts[0];
// setWeb3State({selectedAccount});
// }