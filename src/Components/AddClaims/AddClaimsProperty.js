import { useReducer, useState } from 'react'
import { addNewClaim } from "../../data/DataFunctions"
import CountrySelector from '../CountrySelector'
import './AddClaims.css'

const AddClaimsProperty = () => {

    const [message, setMessage] = useState("");

    const initialNewClaimState = {orderId : "", firstName : "" , surname : "", title : "", country : "", streetName : "", 
    city : "", zipCode : "", make : "", model : "", modelYear : "", animalType : "", animalBreed : "", PolicyNum : "0" , 
    insuranceType : "", claimEstimate : "0", claimReason : "", claimDescription : "", claimStatus : "", 
    date : new Date().toISOString().slice(0,10)}

    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);
    
    const handleChange = (event) => {
       dispatch({field : event.target.id, value : event.target.value});
    }

    const changeCountry = (country) => {
        dispatch({field : "country", value : country});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        addNewClaim(newClaim)
            .then( response => {
                if (response.status === 200) {
                    setMessage("New transaction added with id " + response.data.id);
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
    <form className="addClaimsForm" onSubmit={handleSubmit}  >
        <h2>New Property Claim</h2>
        <label htmlFor="id">Oder Id</label>
        <input type="text" id="orderId" value={newClaim.orderId} onChange={handleChange} />
        <br/>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={newClaim.firstName} onChange={handleChange}/>
        <br/>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" value={newClaim.surname} onChange={handleChange} />
        <br/>
        <label htmlFor="title">Title</label>
            <select type="text" id="title" value={newClaim.title} onChange={handleChange}>
                <option value="" disabled={true}>Please Select</option>
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Mrs</option>
                <option value="Mx">Mx</option>
            </select>
        <br/>
        <CountrySelector value={newClaim.country} changeCountry={changeCountry} />
        <input type="text" id="country" value={newClaim.country} onChange={handleChange} />
        <br/>
        <label htmlFor="streetName">House Number & Street Name</label>
        <input type="text"  id="streetName" value={newClaim.streetName} onChange={handleChange}/>
        <br/>
        <label htmlFor="city">Town or City</label>
        <input type="text"  id="city" value={newClaim.city} onChange={handleChange}/>
        <br/>
        <label htmlFor="zipCode">Zip code / Post Code</label>
        <input type="text"  id="zipCode" value={newClaim.zipCode} onChange={handleChange}/>
        <br/>
        <label htmlFor="policyNum">Policy Number</label>
        <input type="text"  id="policyNum" value={newClaim.policyNum} onChange={handleChange}/>
        <br/>
        <label htmlFor="insuranceType">Insurance Type</label>
            <select type="text"  id="insuranceType" value={newClaim.insuranceType} onChange={handleChange}>
                <option value="" disabled={true}>Please Select</option>
                <option  value="Property" selected>Property</option>
            </select>
        <br/>
        <label htmlFor="claimEstimate">Claim Estimate</label>
        <input type="text" id="claimEstimate" value={newClaim.claimEstimate} onChange={handleChange} />
        <br/>
        <label htmlFor="claimReason">Claim Reason</label>
        <input type="text"  id="claimReason" value={newClaim.claimReason} onChange={handleChange} />
        <br/>
        <label htmlFor="claimDescription">Claim Description</label>
        <input type="text"  id="claimDescription" value={newClaim.claimDescription} onChange={handleChange} />
        <br/>
        <label htmlFor="claimStatus">Claim Status </label>
            <select type="text"  id="claimStatus" value={newClaim.claimStatus} onChange={handleChange}>
                <option value="" disabled={true}>Please Select</option>
                <option value="Awaiting Assessment">Awaiting Assessment</option>
                <option value="Rejected">Rejected</option>
            </select>
        <br/>
        <label htmlFor="note">Note</label>
        <input type="text"  id="note" value={newClaim.note} onChange={handleChange} />
        <br/>
        <label htmlFor="task">Task</label>
        <input type="text"  id="task" value={newClaim.task} onChange={handleChange} />
        <br/>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={newClaim.date} onChange={handleChange}/>
        <br/>
        <button type="submit" >Save</button>
        <div>{message}</div> 
    </form>
    )
}

export default AddClaimsProperty;