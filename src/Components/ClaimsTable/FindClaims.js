import Search from "../Search";
import ClaimsTable from "./ClaimsTable";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";

const FindClaims = (props) => {

const params = useParams();

useEffect( ()=> {
    if (params.orderId != null && params.orderId !== props.searchTerm) {
        props.setSearchTerm(params.orderId);
    }
} , [params.orderId]);

return (
    <>
        <Search setSearchTerm={props.setSearchTerm} />
        <ClaimsTable searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindClaims;