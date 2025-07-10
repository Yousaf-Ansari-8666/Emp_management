import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  // console.log(data);
  return (
    <>
      <h1 className="p-5 pt-8 text-2xl font-bold">Your Tasks : </h1>

      <div
        id="tasklist"
        className="h-[50%]  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-start gap-5  w-full py-1 "
      >
        {data?.tasks.map((elem, idx) => {
          // console.log(elem);

          if (elem.active) {
            return <AcceptTask key={idx} data={elem} />;
          }
          if (elem.newTask) {
            return <NewTask key={idx} data={elem} />;
          }
          if (elem.completed) {
            return <CompleteTask key={idx} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={idx} data={elem} />;
          }
        })}
      </div>
    </>
  );
};

export default TaskList;
