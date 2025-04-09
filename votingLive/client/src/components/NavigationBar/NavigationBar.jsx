// import { Link } from "react-router-dom";
// import "./NavigationBar.css";
// const NavigationBar = () => {
//     return ( <div>
//         <ul>
//             <li>
//                 <Link to="/candidate-register">
//                 Candidate Register 
//                 </Link>

//             </li>
//             <li>
//                 <Link to="/candidate-list">
//                 Candidate List
//                 </Link>

//             </li>
//             <li>
//                 <Link to="/voter-register">
//                 Voter Register 
//                 </Link>

//             </li>
//             <li>
//                 <Link to="/voter-list">
//                 Voter List 
//                 </Link>

//             </li>
//             <li>
//                 <Link to="/election-commission">
//                 Election Commission
//                 </Link>

//             </li>

//         </ul>
//     </div> );
// }
 
// export default NavigationBar;


import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { useWeb3Context } from "../../context/useWeb3Context";

const NavigationBar = () => {
    const {web3State}=useWeb3Context();
    const { selectedAccount} = web3State;
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/candidate-register" className="navbar-link">
                        Candidate Register
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/candidate-list" className="navbar-link">
                        Candidate List
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/voter-register" className="navbar-link">
                        Voter Register
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/voter-list" className="navbar-link">
                        Voter List
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/election-commission" className="navbar-link">
                        Election Commission
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/token-exchange" className="navbar-link">
                        Token Exchange
                    </Link>
                    </li>

                    <li className="navbar-item">
                    <Link to="/voter-profile" className="navbar-link">
                        Voter Profile
                    </Link>
                
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
