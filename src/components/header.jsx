import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-6">
            <NavLink to="/">home</NavLink>
            <NavLink to="/users">users</NavLink>
            <NavLink to="/signup">sign Up</NavLink>
            <NavLink to="/addCoffee">add Coffee</NavLink>
            <NavLink to="/signin">sign in</NavLink>
          
        </div>
    );
};

export default Header;