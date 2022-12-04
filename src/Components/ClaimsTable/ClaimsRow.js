const ClaimsRow = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.surname}</td>
            <td>{props.title}</td>
            <td>{props.address1}</td>
            <td>{props.address2}</td>
            <td>{props.address3}</td>
            <td>{props.policyNum}</td>
            <td>{props.insuranceType}</td>
            <td>{props.claimEstimate}</td>
            <td>{props.claimReason}</td>
            <td>{props.claimDescription}</td>
            <td>{props.claimStatus}</td>
        </tr>
    )
}

export default ClaimsRow;