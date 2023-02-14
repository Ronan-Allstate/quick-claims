import { useReducer, useState } from 'react'
import { updateClaim } from "../../data/DataFunctions"
import CountrySelector from '../CountrySelector'
import './EditClaims.css'

const EditClaims = (props) => {

    const [message, setMessage] = useState("");

    

    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [updatedClaim, dispatch] = useReducer(formReducer, props.claim);
    
    const handleChange = (event) => {
       dispatch({field : event.target.id, value : event.target.value});
    }

    const changeCountry = (country) => {
        dispatch({field : "country", value : country});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        updateClaim(updatedClaim)
            .then( response => {
                if (response.status === 200) {
                    setMessage("Transaction updated with id " + response.data.id);
                }
                else {
                    setMessage("Something went wrong - status code was " + response.status);
                }
                
            } )
            .catch( error => {
                setMessage("Something went wrong - " + error);
            })
    } 

    return (
    <form className="editClaimsForm" onSubmit={handleSubmit}  >
        <h2>Process Claim</h2>
        <label htmlFor="id">Oder Id</label>
        <input type="text" id="orderId" value={updatedClaim.orderId} onChange={handleChange} />
        <br/>
        <label htmlFor="firstName">first Name</label>
        <input type="text" id="firstName" value={updatedClaim.firstName} onChange={handleChange}/>
        <br/>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" value={updatedClaim.surname} onChange={handleChange} />
        <br/>
        <label htmlFor="title">Title</label>
            <select type="text" id="title" value={updatedClaim.title} onChange={handleChange}>
                <option value="" disabled={true}>Please Select</option>
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
                <option value="Mx">Mx</option>
            </select>
        <br/>
        <CountrySelector value={updatedClaim.country} changeCountry={changeCountry} />
        <input type="text" id="country" value={updatedClaim.country} onChange={handleChange} />
        <br/>
        <label htmlFor="streetName">House Number & Street Name</label>
        <input type="text"  id="streetName" value={updatedClaim.streetName} onChange={handleChange}/>
        <br/>
        <label htmlFor="city">Town or City</label>
        <input type="text"  id="city" value={updatedClaim.city} onChange={handleChange}/>
        <br/>
        <label htmlFor="zipCode">Zip code / Post Code</label>
        <input type="text"  id="zipCode" value={updatedClaim.zipCode} onChange={handleChange}/>
        <br/>
        <label htmlFor="make">Vehicle Make</label>
        <input type="text"  id="make" value={updatedClaim.make} onChange={handleChange}/>
        <br/>
        <label htmlFor="model">Vehicle Model</label>
        <input type="text"  id="model" value={updatedClaim.model} onChange={handleChange}/>
        <br/>
        <label htmlFor="modelYear">Model Year</label>
        <input type="text"  id="modelYear" value={updatedClaim.modelYear} onChange={handleChange}/>
        <br/>
        <label htmlFor="animalType">Animal Type</label>
        <input type="text"  id="animalType" value={updatedClaim.animalType} onChange={handleChange}/>
        <br/>
        <label htmlFor="animalBreed">Animal Breed</label>
        <input type="text"  id="animalBreed" value={updatedClaim.animalBreed} onChange={handleChange}/>
        <br/>
        <label htmlFor="policyNum">Policy Number</label>
        <input type="text"  id="policyNum" value={updatedClaim.policyNum} onChange={handleChange}/>
        <br/>
        <label htmlFor="insuranceType">Insurance Type</label>
            <select type="text"  id="insuranceType" value={updatedClaim.insuranceType} onChange={handleChange}>
                <option value="" disabled={true}>Please Select</option>
                <option value="Property">Property</option>
                <option value="Motor">Motor</option>
                <option value="Pet">Pet</option>
            </select>
        <br/>
        <label htmlFor="claimEstimate">Claim Estimate</label>
        <input type="text" id="claimEstimate" value={updatedClaim.claimEstimate} onChange={handleChange} />
        <br/>
        <label htmlFor="claimReason">Claim Reason</label>
        <input type="text"  id="claimReason" value={updatedClaim.claimReason} onChange={handleChange} />
        <br/>
        <label htmlFor="claimDescription">Claim Description</label>
        <input type="text"  id="claimDescription" value={updatedClaim.claimDescription} onChange={handleChange} />
        <br/>
        <label htmlFor="claimStatus">Claim Status</label>
            <select type="text"  id="claimStatus" value={updatedClaim.claimStatus} onChange={handleChange}>
                <option value="" disabled={true}>Please Select</option>
                <option value="Prodessing">Processing</option>
                <option value="Accepted: Awaiting Payment">Accepted: Awaiting Payment</option>
                <option value="Accepted: Paid">Accepted: Paid</option>
                <option value="Rejected: Claim Value too high">Rejected: Claim Value too high</option>
            </select>
        <br/>
        <label htmlFor="note">Note</label>
        <input type="text"  id="note" value={updatedClaim.note} onChange={handleChange} />
        <br/>
        <label htmlFor="task">Task</label>
        <input type="text"  id="task" value={updatedClaim.task} onChange={handleChange} />
        <br/>
        <label htmlFor="payout">Payout $</label>
        <input type="text"  id="payout" value={updatedClaim.payout} onChange={handleChange} />
        <br/>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={updatedClaim.date} onChange={handleChange}/>
        <br/>
        <button type="submit" >Save</button>
        <div>{message}</div> 
    </form>
    )
}

export default EditClaims;