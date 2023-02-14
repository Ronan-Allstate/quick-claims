import { useContext, useEffect, useState } from "react";
import { getAllClaimsForClaimStatus, getAllClaimsForCountry, getAllClaimsForInsuranceType, getAllClaimsForOrderId, getAllClaimsForSurname, getCountries  } from "../../data/DataFunctions";
import ClaimsRow from "./ClaimsRow";
import './Claims.css'
import { useSearchParams } from 'react-router-dom';
import CountrySelector from "../CountrySelector";
import { UserContext } from "../../contexts/UserContext";
import InsuranceTypeSelector from "../InsuranceTypeSelector";

const ClaimsTableInsuranceType = (props) => {

    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    const currentUser = useContext(UserContext);

    useEffect( () => {
        if(props.searchTerm !== "") {
            setIsLoading(true);
            getAllClaimsForSurname(props.searchTerm)
                .then( response => {
                        setClaims(response.data);
                        setIsLoading(false);
                } )
                .catch ( error => {
                    console.log("something went wrong", error);
                })
        }

    }, [props.searchTerm]  );

    const loadDataInsuranceType = (insuranceType) => {
        console.log(currentUser);
        getAllClaimsForInsuranceType(insuranceType, currentUser.user.name, currentUser.user.password)
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
       
    const [selectedInsuranceType, setSelectedInsuranceType] = useState("");

    useEffect( ()=> {
        const insuranceType = searchParams.get("insuranceType");
        console.log(insuranceType)
        if (insuranceType !== selectedInsuranceType) {
            setSelectedInsuranceType(insuranceType);
            loadDataInsuranceType(insuranceType);
        }
     }, [searchParams] );

    const changeInsuranceType = (insuranceType) => {
        setSearchParams({"insuranceType" : insuranceType});
    }

    
    return (<>
        {!isLoading && props.searchTerm === "" && <InsuranceTypeSelector changeInsuranceType={changeInsuranceType} />}
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

export default ClaimsTableInsuranceType;