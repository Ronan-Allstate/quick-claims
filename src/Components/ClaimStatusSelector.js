import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getClaimStatuses } from "../data/DataFunctions";

const ClaimStatusSelector = (props) => {

    useEffect( () => {
        loadClaimStatuses();
    } , []);

    const [uniqueclaimStatuses, setUniqueClaimStatuses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const claimStatusesInRedux = useSelector( state => state.claimStatuses);
    const timeOfLastFetch = useSelector( state => state.lastFetch);
    const dispatch = useDispatch();

    const loadClaimStatuses = () => {

        if(claimStatusesInRedux.length > 0 && new Date().getTime() - timeOfLastFetch < 60000) {
            console.log("using claimStatuses from redux");
            setUniqueClaimStatuses(claimStatusesInRedux);
            setIsLoading(false);
        }
        
        else {
            console.log("getting claimStatuses via rest");
            getClaimStatuses()
            .then ( response => {
                if (response.status === 200) {
                    setUniqueClaimStatuses(response.data);
                    dispatch({type:"updateClaimStatuses", value : response.data});
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
            setSelectedClaimStatus(props.value);
        }
    }

    const [selectedClaimStatus, setSelectedClaimStatus] = useState("");

    const changeClaimStatus = (event) => {
        const claimStatus = event.target.value;
        props.changeClaimStatus(claimStatus);
    }


    return (<div className="claimsStatusSelector">
    Select Status : <select onChange={changeClaimStatus} defaultValue={selectedClaimStatus}>
        <option value="" disabled={true}> ---select---</option>
        {uniqueclaimStatuses.map (claimStatus => <option key={claimStatus} value={claimStatus}>{claimStatus}</option>)}
    </select>
</div>)

}

export default ClaimStatusSelector;