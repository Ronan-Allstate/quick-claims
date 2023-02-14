import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchInsuranceType = (props) => {

    //stateful variable called searchTerm to store the value in the input
    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();
    
    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }

    const handleChange = (event) => {
        setTouched(true);
        setLocalSearchTerm(event.target.value);
        checkValidity(event.target.value);
    }

    const doSearch  = (event) => {
        event.preventDefault();
        props.setSearchTerm(localSearchTerm);
        navigate(`/findInsuranceType/${localSearchTerm}`);
    }

    const clearForm = () => {
        setLocalSearchTerm("");
        setTouched(false);
        setValid(true);
        props.setSearchTerm("");
        
    }

    return <div className="container">
        <form onSubmit={doSearch}>
            <label htmlFor="surname" >Surname</label>
            <input id="id" type="text" onChange={handleChange} value={localSearchTerm}
                style ={{border: valid ? "1px solid #000" : "2px solid #f00"}}
                className={valid ? "" : "searchBoxError"}
            />
            <button type="submit" disabled={!valid || !touched}>Search</button>
            <button onClick={clearForm} >Reset</button>
        </form>
        
    </div>
}

export default SearchInsuranceType;