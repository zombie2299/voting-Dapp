// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./tokenMarketplace.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Vote{
    address electionCommission;
    address public winner;
    enum Gender{NotSpecified,Male,Female,Other}
    

    struct Voter{
        string name;
        uint age;
        uint voterId;
        Gender gender;
        uint voteCandidateId;
        address voterAddress;
    }

    struct Candidate{
        string name;
        string party;
        uint age;
        Gender gender;
        uint candidateId;
        address candidateAddress;
        uint votes;
    }

    enum VotingStatus {NotStarted,InProgress,Ended}
    uint nextVoterId =1;
    uint nextCandidateId = 1;
    uint startTime;
    uint endTime;

    mapping (uint => Voter) voterDetails;
    mapping (uint => Candidate) candidateDetails;
    bool stopVoting;
    IERC20 public  gldToken;
    event NewCandidateRegistered(string name,string party,uint age,Gender gender,uint candidateId);

    event NewVoterRegistered(string name,uint age,Gender gender,uint voterId);
    event VoteCasted(uint voterId,uint candidateId);
    event VotingPeriodSet(uint startTime,uint endTime);
    event VotingStatusUpdated(VotingStatus status);
    event ElectionResultAnnounced(address winner);

    constructor(address _gldToken){
        gldToken = IERC20(_gldToken);
        electionCommission = msg.sender;

    }

    modifier idVotingOver(){
        require(block.timestamp> endTime || stopVoting == true,"Voting is not over");
        _;
    }



    modifier onlyCommissioner(){
        require(electionCommission == msg.sender,"Not from election commission");
        _;
    }

    function candidateRegister(string calldata _name,string calldata _party,uint _age,Gender _gender) external {
        require(_age >= 18,"Age is under 18");
        require(candidateVarification(msg.sender),"You already registered");
        require(nextCandidateId<3,"Candidate registration full");
        candidateDetails[nextCandidateId] = Candidate({name:_name,party:_party,age:_age,gender:_gender,candidateId:nextCandidateId,candidateAddress:msg.sender,votes:0});
        nextCandidateId++;
    }

    function candidateVarification(address  _person) internal view returns(bool){
        for(uint i=1;i<nextCandidateId;i++){
            if (candidateDetails[i].candidateAddress == _person){ 
            return false; //Loop entered - candidate exists
            }
        }
         return true; // candidate does not exist
    }

    function getVoterProfile(uint _voterId) public view returns (Voter memory){
        require(voterDetails[_voterId].voterAddress== msg.sender);
        return voterDetails[_voterId];
    }
    
   function candidateList() public view returns(Candidate[] memory){
        Candidate[] memory candidateArr = new Candidate[] (nextCandidateId-1);
        for (uint i=1;i<nextCandidateId;i++){
            candidateArr[i-1] = candidateDetails[i];//transfering data from mappinng to array
        }
        return candidateArr;
   }

   function voterVerification(address _person) internal view returns (bool){
    for(uint i=1;i<nextVoterId;i++){
        if(voterDetails[i].voterAddress == _person){
            return false; // Voter already registered
        }
    }
    return true; // voter not registered
   }

   function voterRegister(string calldata _name,uint _age,Gender _gender) external{
    require(voterVerification(msg.sender),"Voter already registerd");
    require(_age>=18,"You are not eligible");
    voterDetails[nextVoterId]=Voter(_name,_age,nextVoterId,_gender,0,msg.sender);
    emit NewVoterRegistered(_name, _age, _gender, nextVoterId);
    nextVoterId++;
   }

   function voterList() public view onlyCommissioner() returns(Voter[] memory){
    Voter[] memory voterArr = new Voter[](nextVoterId -1);
    for(uint i=1;i<nextVoterId;i++){
        voterArr[i-1]= voterDetails[i];
    }
    return voterArr;
   }

   function vote(uint _voterId,uint _id) external {
    require(voterDetails[_voterId].voteCandidateId==0,"Already voted");
    require(voterDetails[_voterId].voterAddress==msg.sender,"You are not a voter");
    require(startTime !=0,"Votint not started");
    require(nextCandidateId==3,"Candidate registration not done yet");
    require(_id > 0 && _id < 3,"Invalid candidate id");
    voterDetails[_voterId].voteCandidateId = _id;
    candidateDetails[_id].votes++;
    emit VoteCasted(_voterId,_id);
   }

   function voteTime(uint _startTime,uint _endTime) external onlyCommissioner(){
    startTime = block.timestamp + _startTime;
    endTime = startTime + _endTime;
    emit VotingPeriodSet(startTime, endTime);
   }

   function votingStatus() public view returns (VotingStatus){
    if(startTime == 0){
        return VotingStatus.NotStarted;
    } else if((startTime!=0 && endTime > block.timestamp) && !stopVoting){
        return VotingStatus.InProgress;
    } else {
        return VotingStatus.Ended;
    }
   }

   function result () external onlyCommissioner(){
    require(nextCandidateId > 1,"No candidates registered");
    uint maximumVotes = 0;
    address currentWinner;
    for(uint i=1;i<nextCandidateId;i++){
        if(candidateDetails[i].votes>maximumVotes){
            maximumVotes = candidateDetails[i].votes;
            currentWinner = candidateDetails[i].candidateAddress;
        }
    }
    winner = currentWinner;
    emit ElectionResultAnnounced(winner);
   }

   function emeregency() public onlyCommissioner(){
    stopVoting = true;
   }

}
