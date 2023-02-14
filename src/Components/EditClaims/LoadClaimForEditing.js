import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllClaimsForId } from "../../data/DataFunctions";
import EditClaims from "./EditClaims"

const LoadClaimForEditing = () => {
    const [claim, setClaim] = useState(null);

    const params = useParams();

    useEffect(() => {getAllClaimsForId(params.id).then(result => setClaim(result.data))}, []);

    return <> {claim != null && <EditClaims claim={claim}/>}</>

}

export default LoadClaimForEditing