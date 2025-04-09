// import {useState, useEffect } from "react";
// import {useWeb3Context} from "../../context/useWeb3Context";
// import { useNavigate } from "react-router-dom";
// const CandidateList = () => {
//     const token = localStorage.getItem("token");
//     const navigateTo = useNavigate()
//     useEffect(()=>{
//         if(!token){
//             navigateTo("/")
//         }
//     },[navigateTo,token])
//     const {web3State}= useWeb3Context();
//     const {contractInstance}= web3State;
//     const [candidateList,setCandidateList] = useState([])
//     useEffect(()=>{
//         const DisplayCandidateList = async()=>{
//             try {
//                 const CandidateArray =await contractInstance.candidateList();
//                 // const candidateString = CandidateArray.toString()
//                 setCandidateList(CandidateArray)
//                 console.log(CandidateArray)
                
//             } catch (error) {
//                 console.log(error.message);
//             }
//         }
//         contractInstance && DisplayCandidateList()
//     },[contractInstance])
//     return ( <div>
//         {candidateList.length!==0?(
//             candidateList.map((candidate)=>{
//                 return(
//                     <ul key={candidate.candidateId}>
//                         <li>{candidate.name}</li>
//                         <li>{String(candidate.age)}</li>
//                         <li>{candidate.party}</li>
//                         <li>{candidate.candidateAddress}</li>
//                         <img src={`http://localhost:3000/images/CandidateImage/${candidate.candidateAddress}`}></img>
//                     </ul>
//                 )
//             })
//         ):(
//             <p> No candidates found </p>
//         )}
//     </div> );
// }
 
// export default CandidateList;







import { useState,useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import "./CandidateList.css"
const CandidatesList = () => { 
    const {web3State} = useWeb3Context();
    const {contractInstance}=web3State; 
    const [candidateList,setCandidateList]=useState([])
    const token = localStorage.getItem("token")
    const navigateTo = useNavigate()
    useEffect(()=>{
      if(!token){
        navigateTo("/")
      }
    },[navigateTo,token])
    useEffect(()=>{
      const displayCandidatesList = async()=>{
        try {
            const candidateArray = await contractInstance.candidateList();
            // console.log(candidateArray)
            setCandidateList(candidateArray)         
        } catch (error) {
           console.log(error.message) 
        }
      }
      contractInstance && displayCandidatesList()
    },[contractInstance])
    return ( <div className="candidate-list-table-container">
    {candidateList.length!==0?(<table className="candidate-list-table">
        <thead>
            <tr>
            <th className="candidate-list-table-header">Address</th>
                <th className="candidate-list-table-header">Name</th>
                <th className="candidate-list-table-header">Party</th>
                <th className="candidate-list-table-header">Votes</th>
                <th className="candidate-list-table-header">Photo</th>
            </tr>
        </thead>
        <tbody>
            {candidateList.map((candidate, index) => (
                <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td className="candidate-list-table-data">{candidate.candidateAddress}</td>
                    <td className="candidate-list-table-data">{candidate.name}</td>
                    <td className="candidate-list-table-data">{candidate.party}</td>
                    <td className="candidate-list-table-data">{String(candidate.votes)}</td>
                    <td className="candidate-list-table-data">  
                      <img 
                       width={"70px"} 
                       height={"70px"} 
                       src={`http://localhost:3000/images/CandidateImages/${candidate.candidateAddress}.png`}
                      />      
                    </td>
                </tr>
            ))}
        </tbody>
    </table>):(<p>No Candidates Found!</p>)}
</div>);
}
 
export default CandidatesList;


{/* string name;
        string party;
        uint age;
        Gender gender;
        uint candidateId;
        address candidateAddress;
        uint votes; */}
