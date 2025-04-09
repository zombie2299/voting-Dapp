
import {createBrowserRouter} from "react-router-dom";
import CandidateRegistration from "../pages/candidate/CandidateRegistration";
import VoterRegistration from "../pages/voter/VoterRegistration";
import VoterList from "../pages/voter/VoterList";
import CandidateList from "../pages/candidate/CandidateList";
import Wallet from "../pages/Wallet/Wallet";
import NavigationBar  from "../components/NavigationBar/NavigationBar";
import ElectionCommission from "../pages/electionCommission/ElectionCommission";
import TokenExchange from "../pages/TokenExchange/TokenExchange";
import VoterProfile from "../pages/voter/voterProfile";
export const routes = createBrowserRouter([
    {path:"/",element:(
        <div>
            <NavigationBar/>
            <Wallet/>
            </div>
        )},
    {path:"/candidate-register",element:(
            <div>
                <NavigationBar/>
                <CandidateRegistration/>
            </div>
        )},
    {path:"/voter-register",element:(
            <div>
                <NavigationBar/>
                <VoterRegistration/>
            </div>
        )},
    {path:"/candidate-list",element:(
        <div>
            <NavigationBar/>
            <CandidateList/>
        </div>
    )},
    {path:"/voter-list",element:(
        <div>
            <NavigationBar/>
            <VoterList/>
            </div>
        )},
        {path:"/election-commission",element:(
            <div>
                <NavigationBar/>
                <ElectionCommission/>
                </div>
            )},

            {path:"/token-exchange",element:(
                <div>
                    <NavigationBar/>
                    <TokenExchange/>
                    </div>
                )},

                {path:"/voter-profile",element:(
                    <div>
                        <NavigationBar/>
                        <VoterProfile/>
                        </div>
                    )} 

])