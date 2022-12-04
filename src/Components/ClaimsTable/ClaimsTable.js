import { useEffect, useState } from "react";
import { getAllClaims } from "../Data/DataFunctions";
import ClaimsRow from "./ClaimsRow";
import './Claims.css'

const ClaimsTable = () => {

    const claims = getAllClaims();
    const allClaimsStatus = claims.map(claims => claims.claimStatus);
    const uniqueClaimStatus = allClaimsStatus.filter((claimStatus, index) => allClaimsStatus.indexOf(claimStatus) === index);
    const claimsStatusOptions = uniqueClaimStatus.map( c => <option key={c} value={c}>{c}</option>);
    
    const [selectedClaimStatus, SetSelectedClaimStatus] = useState(uniqueClaimStatus[0]);

    const changeClaimStatus = (e) => {
        const option = e.target.options.selectedIndex;
        SetSelectedClaimStatus(uniqueClaimStatus[option]);
    }

    const claimsStatusSelector = <select id="claimStatusSelector" onChange={changeClaimStatus}>
        {claimsStatusOptions}
    </select>

    return (
        <div className="container">
            <div className="claimsStatusSelector">
                Select status: {claimsStatusSelector}
            </div>
            <table className="claimsTable">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Title</th>
                        <th>Streetname</th>
                        <th>Town/City</th>
                        <th>Zip Code</th>
                        <th>Policy Number</th>
                        <th>Insurance Type</th>
                        <th>Claim Estimate $:</th>
                        <th>Claim Reason</th>
                        <th>Claim Desription</th>
                        <th>Cliam Status</th>
                    </tr>
                </thead>
                <tbody>
                    {claims.map(claim => claim.claimStatus === selectedClaimStatus && ClaimsRow(claim))}
                </tbody>
            </table>
        </div>
    );
    
}

export default ClaimsTable;