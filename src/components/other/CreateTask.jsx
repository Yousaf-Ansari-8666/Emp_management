import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const CreateTask = () => {
  const authData = useContext(AuthContext);
  // console.log(authData)

  const [form, setForm] = useState({
    taskTitle: "",
    taskDate: "",
    assignTo: "",
    category: "",
    taskDescription: "",
  });

  const handleInput = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedForm = {
      ...form,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setForm(updatedForm);
    // console.log(updatedForm)

    authData.empdata.forEach((elem) => {
      if (form.assignTo == elem.firstName) {
        elem.tasks.push(updatedForm);
        // console.log(elem)
      }
    });

    // console.log(updatedForm)

    localStorage.setItem("empdata", JSON.stringify(updatedForm));

    setForm({
      taskTitle: "",
      taskDate: "",
      assignTo: "",
      category: "",
      taskDescription: "",
    });
  };

  return (
    <div className="p-1.5 md:p-4 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={handleFormSubmit}
        // className="flex flex-wrap w-full items-start justify-between"
      >

        <div className=" grid grid-cols-1 md:grid-cols-2 justify-around">



        <div className="w-[1/2]">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-2 px-2 w-full md:w-4/5 sm:w-[70%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name="taskTitle"
              value={form.taskTitle}
              onChange={handleInput}
              placeholder="Make a UI design"
            />
          </div>


          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-2 px-2 w-full md:w-4/5 sm:w-[70%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name="taskDate"
              value={form.taskDate}
              onChange={handleInput}
            />
          </div>


          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-2 px-2 w-full md:w-4/5 sm:w-[70%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name="assignTo"
              value={form.assignTo}
              onChange={handleInput}
              placeholder="employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-2 px-2 w-full md:w-4/5 sm:w-[70%] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name="category"
              value={form.category}
              onChange={handleInput}
              placeholder="design, dev, etc"
            />
          </div>
        </div>


        <div className="w-3/4 flex flex-col justify-center flex-start items-center m-auto sm:m-0">
          <h3 className="text-xl  text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full resize-none h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name="taskDescription"
            value={form.taskDescription}
            onChange={handleInput}
            id=""
            rows="4"
            placeholder="start writing here"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>

        </div>




      </form>
    </div>
  );
};

export default CreateTask;
