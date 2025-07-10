import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashBoard = (props) => {
 
  return (
    <>
      <div className="p-7">
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
};

export default AdminDashBoard;
