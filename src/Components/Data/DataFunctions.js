// export const getAllClaims = () => {
//     return [
//         {id: 101, firstName: "Ronan", surname: "Donnelly", title: "Mr", address1: "01 StreetName", address2:"Town/City", address3: "Zop Code", policyNum: 1, insuranceType: "Home", claimEstimate: 5000, claimReason: "Fire", claimDescription: "Cooking failure", claimStatus: "Active"},
//         {id: 102, firstName: "Matt", surname: "Thornton", title: "Mr", address1: "01 StreetName", address2:"Town/City", address3: "Zop Code", policyNum: 2, insuranceType: "Motor", claimEstimate: 10000, claimReason: "Flooding", claimDescription: "Heavy Rainfall", claimStatus: "Closed"}
//     ]
// }

const getAllClaims = [
    {id: 101, firstName: "Ronan", surname: "Donnelly", title: "Mr", address1: "01 StreetName", address2:"Town/City", address3: "Zop Code", policyNum: 1, insuranceType: "Home", claimEstimate: 5000, claimReason: "Fire", claimDescription: "Cooking failure", claimStatus: "Active"},
    {id: 102, firstName: "Matt", surname: "Thornton", title: "Mr", address1: "01 StreetName", address2:"Town/City", address3: "Zop Code", policyNum: 2, insuranceType: "Motor", claimEstimate: 10000, claimReason: "Flooding", claimDescription: "Heavy Rainfall", claimStatus: "Closed"}

]

export const getAllClaimsForId = (id) => {
    return getAllClaims.find(claimId => claimId.id === id);
}

export const getClaimStatus = (claimStatus) => {
    return getAllClaims.find(id => id.claimStatus === claimStatus);
}

export const getClaimsForClaimStatus = (claimStatus) => {
    return getAllClaims.find(id => id.claimStatus === claimStatus);
}