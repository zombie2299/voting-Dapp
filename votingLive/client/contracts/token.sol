// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply * 10**decimals());
    }
}
// 0xB3084c513197A2c39cbfB946D1A6208277F80Bd5     erc20 token address

//0xD99497264Eaa91a115B514c5e1fe71287776147F  2nd for governance

// 0x6165b2019D82a908d12AB4e7322DD3EF66bfE03E    tokenMarketPlace address

// 0xD34B6815509cD7a60d7C09F820cC36cD413b9Ed5 tokenMarketPlaceDemo address 

//0x4CCf04080D68D140b9Ef22a922E690CfE6c59B7e  voting smart contract 

// 0xf94104a0200907dA3fBF9f4f557D57e9101b1CD3 updated voting smart contract

