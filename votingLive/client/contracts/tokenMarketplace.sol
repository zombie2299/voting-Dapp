// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
  import"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
  import "@openzeppelin/contracts/utils/math/SafeMath.sol";
  
contract tokenMarketplace{
    using SafeERC20 for IERC20;
    using SafeERC20 for uint;
    uint public tokenPrice  = 2e16 wei;
    uint public sellerCount = 1;
    uint public buyerCount;

    IERC20 public gldToken;

    event TokenPriceUpdated(uint newPrice);
    event TokenBought(address indexed buyer,uint amount ,uint TokenPrice);
    event TokenSold(address indexed seller,uint amount,uint TokenPrice);

    constructor(address _erc20Token){
      gldToken = IERC20(_erc20Token);
    }

    function calculateTokenPrice() public {
      require(tokenPrice !=0,"there must be atleast one buyer");
      uint totalParticipants = sellerCount + buyerCount; 
      tokenPrice = (tokenPrice * (buyerCount))/(totalParticipants);
      emit TokenPriceUpdated(tokenPrice);
    }
  // when erc20 contract has transferred some token to the
    function buyGLDtoken (uint amountOfToken) public payable  {
      uint priceToPay = tokenPrice* (amountOfToken/1e18);
      require(msg.value == priceToPay,"Not enough Ethers");
      gldToken.safeTransfer(msg.sender,amountOfToken);
      buyerCount +=1;
      emit TokenBought(msg.sender,amountOfToken,tokenPrice);
    }

    function sellGLDtoken(uint amountOfTokenToSell) public payable {
      require(gldToken.balanceOf(msg.sender)>=amountOfTokenToSell,"You do not have enough balance");
      uint amoutnToPayTheUser = tokenPrice * (amountOfTokenToSell/1e18);
      gldToken.safeTransferFrom(msg.sender, address(this), amountOfTokenToSell);
      (bool success,)= msg.sender.call{value:amoutnToPayTheUser}("");
      require(success,"Transfer failed");
      sellerCount+=1;
      emit TokenSold(msg.sender, amountOfTokenToSell,tokenPrice);

    }
}   