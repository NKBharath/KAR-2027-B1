import Sidebar from "../../components/Sidebar";
import students from "../../data/studentdata";
import "../CSS/ShowStudent.css";
function ShowStudent() {
  return (
    <div className="show-student-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>hiiiii</h1>
      </div>
    </div>
  );
}

export default ShowStudent;
