import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Search = (props) => {

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
        navigate(`/find/${localSearchTerm}`);
    }

    const clearForm = () => {
        setLocalSearchTerm("");
        setTouched(false);
        setValid(true);
        props.setSearchTerm("");
        
    }

    return <div className="container">
        <form onSubmit={doSearch}>
            <label htmlFor="id" >Order Id</label>
            <input id="id" type="text" onChange={handleChange} value={localSearchTerm}/>
            <button type="submit" disabled={!valid || !touched}>Search</button>
            <button onClick={clearForm} >Reset</button>
        </form>
        
    </div>
}

export default Search;