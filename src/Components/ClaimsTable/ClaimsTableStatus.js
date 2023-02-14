import { useContext, useEffect, useState } from "react";
import { getAllClaimsForClaimStatus, getAllClaimsForCountry, getAllClaimsForOrderId, getCountries  } from "../../data/DataFunctions";
import ClaimsRow from "./ClaimsRow";
import './Claims.css'
import { useSearchParams } from 'react-router-dom';
import CountrySelector from "../CountrySelector";
import { UserContext } from "../../contexts/UserContext";
import ClaimStatusSelector from "../ClaimStatusSelector";

const ClaimsTableStatus = (props) => {

    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    const currentUser = useContext(UserContext);

    useEffect( () => {
        if(props.searchTerm !== "") {
            setIsLoading(true);
            getAllClaimsForOrderId(props.searchTerm)
                .then( response => {
                        setClaims(response.data);
                        setIsLoading(false);
                } )
                .catch ( error => {
                    console.log("something went wrong", error);
                })
        }

    }, [props.searchTerm]  );

    const loadDataClaimStatus = (claimStatus) => {
        console.log(currentUser);
        getAllClaimsForClaimStatus(claimStatus, currentUser.user.name, currentUser.user.password)
            .then ( response => {
                console.log(response)
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
    
    //debugger;
       
    const [selectedClaimStatus, setSelectedClaimStatus] = useState("");

    useEffect( ()=> {
        const claimStatus = searchParams.get("claimStatus");
        console.log(claimStatus)
        if (claimStatus !== selectedClaimStatus) {
            setSelectedClaimStatus(claimStatus);
            loadDataClaimStatus(claimStatus);
        }
     }, [searchParams] );

    const changeClaimStatus = (claimStatus) => {
        setSearchParams({"claimStatus" : claimStatus});
    }

    return (<>
        {!isLoading && props.searchTerm === "" && <ClaimStatusSelector changeClaimStatus={changeClaimStatus}  />}
        {isLoading && <p style={{textAlign:"center"}} >Please wait... loading</p>}
        {!isLoading &&
        <table className="claimsTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>OrderId</th>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Title</th>
                    <th>Country</th>
                    <th>Streetname</th>
                    <th>Town/City</th>
                    <th>Zip Code</th>
                    <th>Vehicle Make</th>
                    <th>Vehicle Model</th>
                    <th>Vehicle Year</th>
                    <th>Animal Type</th>
                    <th>Animal Breed</th>
                    <th>Policy Number</th>
                    <th>Insurance Type</th>
                    <th>Claim Estimate $:</th>
                    <th>Claim Reason</th>
                    <th>Claim Desription</th>
                    <th>Cliam Status</th>
                    <th>Note</th>
                    <th>Task</th>
                    <th>Payout $</th>
                    <th>Date</th>
                    <th>Process Claim</th>
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
                    .map( (claim, index) => {
                    return <ClaimsRow key={index} id={claim.id} orderId={claim.orderId} firstName={claim.firstName} surname={claim.surname}
                    title = {claim.title}  country = {claim.country} streetName={claim.streetName} city={claim.city} zipCode={claim.zipCode}
                    make={claim.make} model={claim.model} modelYear={claim.modelYear} animalType={claim.animalType} animalBreed={claim.animalBreed}
                    policyNum = {claim.policyNum} insuranceType={claim.insuranceType} claimEstimate={claim.claimEstimate} claimReason={claim.claimReason} 
                    claimDescription={claim.claimDescription}  claimStatus={claim.claimStatus} note={claim.note} task={claim.task} payout={claim.payout} date={claim.date} />
                }   )   }
    
            </tbody>
        </table>
        }
        </>
    )
    
}

export default ClaimsTableStatus;