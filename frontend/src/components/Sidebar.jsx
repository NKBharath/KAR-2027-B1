import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Sidebar() {
            const Navigate = useNavigate();

    return ( 
        <div >
            <h1>Sidebar</h1>
            <h2 onClick={() => Navigate("/show-student")}>Show Students</h2>
            <h2 onClick={() => Navigate("/update-student")}>Update Student</h2>
            <h2 onClick={() => Navigate("/add-student")}>Add Student</h2>
            <h2 onClick={() => Navigate("/delete-student")}>Delete Student</h2>
        </div>
     );
}

export default Sidebar;