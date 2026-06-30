import Sidebar from "../../components/Sidebar";
import students from "../../data/studentdata";
function ShowStudent() {
  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
      </div>
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
    </div>
  );
}

export default ShowStudent;
