import Search from "../Webpages/Search";
import ClaimsTable from "./ClaimsTable";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";

const FindClaimsPage = (props) => {

const params = useParams();

useEffect( ()=> {
    if (params.id != null && params.id !== props.searchTerm) {
        props.setSearchTerm(params.id);
    }
} , [params.orderId]);

return (
    <>
        <Search setSearchTerm={props.setSearchTerm} />
        <ClaimsTable searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindClaimsPage;