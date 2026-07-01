import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
        const Navigate = useNavigate();

    return ( 
        <div className="sidebar-container">
            <h2 >Sidebar</h2>
            <div className="sidebar-item" onClick={() => Navigate("/show-student")}>Show Students</div>
            <div className="sidebar-item" onClick={() => Navigate("/update-student")}>Update Student</div>
            <div className="sidebar-item" onClick={() => Navigate("/add-student")}>Add Student</div>
            <div className="sidebar-item" onClick={() => Navigate("/delete-student")}>Delete Student</div>
        </div>
     );
}

export default Sidebar;