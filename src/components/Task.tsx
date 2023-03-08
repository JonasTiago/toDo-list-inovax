import CheckBox from './Checkbox';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

export default function Task() {
  
  return (
    <div className="w-full flex justify-between my-2">
      <div className="bg-bgTask w-1/12 flex justify-center items-center rounded-bl rounded-tl">
        <CheckBox />
      </div>
      <div className=" w-full h-20 mx-1 bg-bgTask px-5 py-2.5">
        <p className="text-white text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="w-1/12 flex flex-col items-center justify-evenly">
        <DeleteTask />
        <EditTask />
      </div>
    </div>
  );
}
