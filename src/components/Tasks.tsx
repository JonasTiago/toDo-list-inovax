import BG from '../assets/bg.png';
import Task from './Task';


export default function Tasks() {
  return (
    <div className=" opacity-90 w-full flex flex-col">
      <Task />
      <Task />
      <Task />
      {/* <img src={BG} alt="xx" /> */}
    </div>
  );
}
