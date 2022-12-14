import {NavLink, Link} from "react-router-dom"

const Menu = () => {
    return (
    <div className="pageHeader" >
        <h1><NavLink to="/">Quick Claims</NavLink></h1>
        <ul className="nav">
            <li><NavLink to="/newClaims">New Claim</NavLink></li>
            <li><NavLink to="/find">Find Claims</NavLink></li>
        </ul>
    </div>);
}

export default Menu;