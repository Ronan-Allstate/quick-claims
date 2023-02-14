import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getInsuranceTypes } from "../data/DataFunctions";

const InsuranceTypeSelector = (props) => {

    useEffect( () => {
        loadInsuranceTypes();
    } , []);

    const [uniqueInsuranceTypes, setUniqueInsuranceTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const insuranceTypesInRedux = useSelector( state => state.insuranceTypes);
    const timeOfLastFetch = useSelector( state => state.lastFetch);
    const dispatch = useDispatch();

    const loadInsuranceTypes = () => {

        if(insuranceTypesInRedux.length > 0 && new Date().getTime() - timeOfLastFetch < 60000) {
            console.log("using insuranceTypes from redux");
            setUniqueInsuranceTypes(insuranceTypesInRedux);
            setIsLoading(false);
        }
        
        else {
            console.log("getting insuranceTypes via rest");
            getInsuranceTypes()
            .then ( response => {
                if (response.status === 200) {
                    setUniqueInsuranceTypes(response.data);
                    dispatch({type:"updateInsuranceTypes", value : response.data});
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

        if (props.value != null) {
            setSelectedInsuranceType(props.value);
        }
    }

    const [selectedInsuranceType, setSelectedInsuranceType] = useState("");

    const changeInsuranceType = (event) => {
        const insuranceType = event.target.value;
        props.changeInsuranceType(insuranceType);
    }


    return (<div className="insuranceTypeSelector">
    Select Insurance Type: <select onChange={changeInsuranceType} defaultValue={selectedInsuranceType}>
        <option value="" disabled={true}> ---select---</option>
        {uniqueInsuranceTypes.map (insuranceType => <option key={insuranceType} value={insuranceType}>{insuranceType}</option>)}
    </select>
</div>)

}

export default InsuranceTypeSelector;