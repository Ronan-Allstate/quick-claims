import { useReducer, useState } from 'react'
import { addNewClaim } from "../Data/DataFunctions"
import './AddClaims.css'

const AddClaims = () => {

    const [message, setMessage] = useState("");

    const initialNewClaimState = {id : "", 
    firstName : "" , surname : "", title : "", address1 : "", address2 : "", address3 : "",
    PolicyNum : "" , insuranceType : "", claimEstimate : "", claimReason : "", claimDescription : "",
    claimStatus : ""}

    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);
    
    const handleChange = (event) => {
       dispatch({field : event.target.id, value : event.target.value});
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
        <h2>New Claim</h2>
        <label htmlFor="id">Claim Id</label>
        <input type="number" id="id" value={newClaim.id} onChange={handleChange} />
        <br/>
        <label htmlFor="firstName">first Name</label>
        <input type="text" id="firstName" value={newClaim.firstName} onChange={handleChange}/>
        <br/>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" value={newClaim.surname} onChange={handleChange} />
        <br/>
        <label htmlFor="title">Title</label>
            <select type="text" id="title" value={newClaim.title} onChange={handleChange}>
                <option disabled selected>Please Select</option>
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Mrs</option>
                <option value="Mx">Mx</option>
            </select>
        <br/>
        <label htmlFor="address1">House number & street name</label>
        <input type="text"  id="address1" value={newClaim.address1} onChange={handleChange}/>
        <br/>
        <label htmlFor="address2">Town or City</label>
        <input type="text"  id="address2" value={newClaim.address2} onChange={handleChange}/>
        <br/>
        <label htmlFor="address3">Zip code / Post Code</label>
        <input type="text"  id="address3" value={newClaim.address3} onChange={handleChange}/>
        <br/>
        <label htmlFor="policyNum">Ploicy Number</label>
        <input type="text"  id="policyNum" value={newClaim.policyNum} onChange={handleChange}/>
        <br/>
        <label htmlFor="insuranceType">Insurance Type</label>
            <select type="text"  id="insuranceType" value={newClaim.insuranceType} onChange={handleChange}>
                <option disabled selected>Please Select</option>
                <option value="home">Home</option>
                <option value="motor">Motor</option>
                <option value="pet">Pet</option>
            </select>
        <br/>
        <label htmlFor="claimEstimate">Claim Estimate</label>
        <input type="number"  id="claimEstimate" value={newClaim.claimEstimate} onChange={handleChange} />
        <br/>
        <label htmlFor="claimReason">Claim Reason</label>
        <input type="text"  id="claimReason" value={newClaim.claimReasom} onChange={handleChange} />
        <br/>
        <label htmlFor="claimDescription">Claim Description</label>
        <input type="text"  id="claimDescription" value={newClaim.claimDescription} onChange={handleChange} />
        <br/>
        <label htmlFor="claimStatus">Claim Status</label>
            <select type="text"  id="claimStatus" value={newClaim.claimStatus} onChange={handleChange}>
                <option disabled selected>Please Select</option>
                <option value="Active">Active</option>
                <option value="Closed">Closed</option>
            </select>
        <br/>
        <button type="submit" >Save</button>
        <div>{message}</div> 
    </form>
    )
}

export default AddClaims;