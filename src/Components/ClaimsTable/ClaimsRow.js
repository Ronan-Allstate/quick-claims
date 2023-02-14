import {Link, Navigate, useNavigate} from 'react-router-dom';

const ClaimsRow = (props) => {

    const navigate = useNavigate();
    const edit = () => {

        navigate("/editClaims/" + props.id)

    }

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.orderId}</td>
            <td>{props.firstName}</td>
            <td>{props.surname}</td>
            <td>{props.title}</td>
            <td>{props.country}</td>
            <td>{props.streetName}</td>
            <td>{props.city}</td>
            <td>{props.zipCode}</td>
            <td>{props.make}</td>
            <td>{props.model}</td>
            <td>{props.modelYear}</td>
            <td>{props.animalType}</td>
            <td>{props.animalBreed}</td>
            <td>{props.policyNum}</td>
            <td>{props.insuranceType}</td>
            <td>{props.claimEstimate}</td>
            <td>{props.claimReason}</td>
            <td>{props.claimDescription}</td>
            <td>{props.claimStatus}</td>
            <td>{props.note}</td>
            <td>{props.task}</td>
            <td>{props.payout}</td>
            <td>{props.date}</td>
            <td><button onClick={edit}>Process</button></td>
        </tr>
    )
}

export default ClaimsRow;