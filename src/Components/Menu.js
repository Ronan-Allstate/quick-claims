import { useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Menu = () => {

    const currentUser = useContext(UserContext);

    const logout = () => {
        currentUser.setUser({name:"", role:""});
    }
    
    return (
    <div className="pageHeader" >
        <h1><NavLink to="/">Quick Claims</NavLink></h1>
        <ul className="nav">
            <li><NavLink to="/newClaimsProperty">New Property Claim</NavLink></li>
            <li><NavLink to="/newClaimsMotor">New Motor Claim</NavLink></li>
            <li><NavLink to="/newClaimsPet">New Pet Claim</NavLink></li>
            <li><NavLink to="/find">Find Claims By Country</NavLink></li>
            <li><NavLink to="/findStatus">Find Claims by Status</NavLink></li>
            <li><NavLink to="/findInsuranceType">Find Claims By Insurance Types</NavLink></li>
            {currentUser.user.name === "" && <li><Link to="/login">Log in</Link></li>}
            {currentUser.user.name !== "" && <li><button onClick={logout} >Log out</button></li>}
        </ul>
        {currentUser.user.name !== "" && <p>Current user : {currentUser.user.name}</p>}
    </div>);
}

export default Menu;