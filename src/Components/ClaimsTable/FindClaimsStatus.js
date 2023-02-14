import SearchStatus from "../SearchStatus";
import ClaimsTableStatus from "./ClaimsTableStatus";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";

const FindClaimsStatus = (props) => {

const params = useParams();

useEffect( ()=> {
    if (params.orderId != null && params.orderId !== props.searchTerm) {
        props.setSearchTerm(params.orderId);
    }
} , [params.orderId]);

return (
    <>
        <SearchStatus setSearchTerm={props.setSearchTerm} />
        <ClaimsTableStatus searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindClaimsStatus;