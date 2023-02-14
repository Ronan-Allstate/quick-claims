import axios from "axios";



const headers = new Headers({"Accept" : "application/json"})

const getAuthHeader = (username, password) => {
    return {"Authorization" : "Basic " + btoa(`${username}:${password}`)}
}

export const getAllClaimsFetchVersion = () => { 
    return fetch ("http://localhost:8080/api/claim", 
         {
            method: "GET",
            headers : headers            
        }
    )
}

export const getAllClaimsAxiosVersion  = () => {
    return axios({url : "http://localhost:8080/api/claim",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForCountry  = (country, username, password) => {
    console.log("getallclaimsforcountry")
    return axios({url : "http://localhost:8080/api/claim?country="+country,
            method: "GET", 
            headers: {"Accept" : "application/json", ...getAuthHeader(username, password)}
            })
}

export const getAllClaimsForClaimStatus  = (claimStatus, username, password) => {
    console.log("getallclaimsforclaimstatus")
    return axios({url : "http://localhost:8080/api/claim?claimStatus="+claimStatus,
            method: "GET", 
            headers: {"Accept" : "application/json", ...getAuthHeader(username, password)}
            })
}

export const getAllClaimsForInsuranceType  = (insuranceType, username, password) => {
    console.log("getallclaimsforinsurancetype")
    return axios({url : "http://localhost:8080/api/claim?insuranceType="+insuranceType,
            method: "GET", 
            headers: {"Accept" : "application/json", ...getAuthHeader(username, password)}
            })
}

export const getAllClaimsForOrderId  = (orderId) => {
    return axios({url : "http://localhost:8080/api/claim?order="+orderId,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForSurname  = (surname) => {
    return axios({url : "http://localhost:8080/api/claim?surname="+surname,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForId  = (Id) => {
    return axios({url : "http://localhost:8080/api/claim/"+Id,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getCountries = ()  => {
    console.log("getcountries")
    return axios({url : "http://localhost:8080/api/country",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getClaimStatuses = ()  => {
    console.log("getclaimStatuses")
    return axios({url : "http://localhost:8080/api/claimStatus",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getInsuranceTypes = ()  => {
    console.log("getinsuranceTypes")
    return axios({url : "http://localhost:8080/api/insuranceType",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}


export const addNewClaim = (claim) => {
    return axios({url : "http://localhost:8080/api/claim",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : claim
                })
}

export const updateClaim = (claim) => {
    return axios({url : "http://localhost:8080/api/claim",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : claim
                })
}

export const login = (username, password) => {
    return axios({url : "http://localhost:8080/api/login",
                    method: "POST",
                    headers: {...getAuthHeader(username,password),
                         "Accept" : "application/json", "Content-Type": "application/json"},
                         data: {username: username}
                    });
}