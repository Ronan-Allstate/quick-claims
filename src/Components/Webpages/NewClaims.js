const NewClaims = () => {
    return (
        <div className="container">
           <h4>Instructions</h4>
           <ul>
               <li>Complete each of the fields to create a new claim</li>
            </ul>

            <form action="post">
                <h4>Customer Information</h4>

                <label htmlFor="firstName">First Name:</label>
                <input className="firstName"/>
                <br/>

                <label htmlFor="surname">Surname:</label>
                <input className="surname"/>
                <br/>

                <label htmlFor="title">Title</label>
                <select className="title">
                    <option disabled selected>Please Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Miss">Miss</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Mrs</option>
                    <option value="Mx">Mx</option>
                </select>
                <br/>

                <label htmlFor="address1">House number & street name</label>
                <input className="address1" type="text"/>
                <br/>

                <label htmlFor="address2">Town or City</label>
                <input className="address2" type="text"/>
                <br/>

                <label htmlFor="address3">Zip code / Post Code</label>
                <input className="address3" type="text"/>
                <br/>

                <h4>Policy Information</h4>
                
                <label htmlFor="policyNum">Policy Number</label>
                <input className="policyNum" type="number"/>
                <br/>

                <label htmlFor="insutanceType">Insurance Type</label>
                <select className="insuranceType">
                    <option disabled selected>Please Select</option>
                    <option value="home">Home</option>
                    <option value="motor">Motor</option>
                    <option value="pet">Pet</option>
                </select>
                <br/>

                <label htmlFor="claimEstimate">Claim Estimate: £</label>
                <input className="claimEstimate" type="number"/>
                <br/>

                <label htmlFor="claimReason">Claim Reason</label>
                <input className="claimReason" type="text"/>
                <br/>

                <label htmlFor="claimDescription">Claim Description</label>
                <textarea className="claimDescription" rows="5"></textarea>
                <br/>

                <button type="submit">Create</button>
            </form>
        </div>

    )
}

export default NewClaims;