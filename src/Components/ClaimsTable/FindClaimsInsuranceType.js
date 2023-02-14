import SearchInsuranceType from "../SearchInsuranceType";
import ClaimsTable from "./ClaimsTable";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import ClaimsTableInsuranceType from "./ClaimsTableInsuranceType";

const FindClaimsInsuranceType = (props) => {

const params = useParams();

useEffect( ()=> {
    if (params.surname != null && params.surname !== props.searchTerm) {
        props.setSearchTerm(params.surname);
    }
} , [params.orderId]);

return (
    <>
        <SearchInsuranceType setSearchTerm={props.setSearchTerm} />
        <ClaimsTableInsuranceType searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindClaimsInsuranceType;