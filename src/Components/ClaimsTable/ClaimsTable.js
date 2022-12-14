import { useEffect, useState } from "react";
import { getAllClaims, getClaimStatus, getClaimsForClaimStatus, getAllClaimsForId } from "../Data/DataFunctions";
import ClaimsRow from "./ClaimsRow";
import './Claims.css'
import { useSearchParams } from 'react-router-dom';

const ClaimsTable = (props) => {

    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect( () => {
        loadClaimStatus();
    } , []);

    useEffect( () => {
        if(props.searchTerm !== "") {
            setIsLoading(true);
            getAllClaimsForId(props.searchTerm)
                .then( response => {
                        setClaims(response.data);
                        setIsLoading(false);
                } )
                .catch ( error => {
                    console.log("something went wrong", error);
                })
        }

    }, [props.searchTerm]  );

    const [uniqueClaimStatus, setUniqueClaimStatus] = useState([]);

    const loadClaimStatus = () => {
        getClaimStatus()
        .then ( response => {
            if (response.status === 200) {
                setUniqueClaimStatus(response.data);
                setIsLoading(false);
            }
            else {
                console.log("something went wrong");
            }
        })
        .catch ( error => {
            console.log("something went wrong", error)
        })
    }

    const loadData = (claimStatus) => {
        
        getClaimsForClaimStatus(claimStatus)
            .then ( response => {
                if (response.status === 200) {
                    setIsLoading(false);
                    setClaims(response.data);
                }
                else {
                    console.log("something went wrong", response.status)
                }
            })
            .catch( error => {
                console.log("something went wrong", error);
            })
    }

    const [selectedClaimStatus, setSelectedClaimStatus] = useState("");

    useEffect( ()=> {
        const claimStatus = searchParams.get("claimStatus");
        if (claimStatus !== selectedClaimStatus) {
            setSelectedClaimStatus(claimStatus);
            loadData(claimStatus);
        }
     }, [] );

     const changeClaimStatus = (event) => {
        const claimStatus = event.target.value;
        setSelectedClaimStatus(claimStatus);
        setIsLoading(claimStatus);
        setSearchParams({"claimStatus" : claimStatus});
    }

    return (<>
        {!isLoading && props.searchTerm === "" && <div className="claimsStatusSelector">
            Select claim Status: <select onChange={changeClaimStatus} defaultValue={selectedClaimStatus}>
                <option value="" disabled={true}> ---select---</option>
                {uniqueClaimStatus.map (claimStatus => <option key={claimStatus} value={claimStatus}>{claimStatus}</option>)}
            </select>
        </div>}
        {isLoading && <p style={{textAlign:"center"}} >Please wait... loading</p>}
        {!isLoading &&
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
                {
                /* payments.map( (payment, index) => {
                    return  payment.country === selectedCountry && <TransactionsRow key={index} id={payment.id} date={payment.date}
                    country = {payment.country}  currency = {payment.currency} 
                    amount={payment.amount}   />
                }   ) 
                */ 
                }
                
                {   claims
                    .filter (claim => props.searchTerm !== "" || claim.claimStatus === selectedClaimStatus)
                    .map( (claim, index) => {
                    return <ClaimsRow key={index} id={claim.id} firstName={claim.firstName} surname={claim.surname}
                    title = {claim.title}  address1 = {claim.address1} address2={claim.address2} address3={claim.address3}
                    policyNumber = {claim.policyNumber}  insuranceType = {claim.insuranceType} claimEstimate={claim.claimEstimate} 
                    claimReason={claim.claimReason} claimDescription={claim.claimDescription} claimStatus={claim.claimStatus} />
                }   )   }
    
            </tbody>
        </table>
        }
        </>
    )
    
}

export default ClaimsTable;