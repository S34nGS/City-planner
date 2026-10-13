// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Sidebar(){
    return(
        <>
            <div className="sidebar">
                <Link to="/">Home</Link>
                <br />
                <Link to="/savedplaces">Saved places</Link>
            </div>
        </>
    )
}