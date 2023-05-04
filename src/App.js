import { BiArchive,BiTrash } from "react-icons/bi";
import "./App.css";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import appointmentList from './data.json';
import AppointmentInfo from "./components/Appointmentinfo";

function App() {
  return (
    <div className="">
      <h1 className="bold text-3xl flex justify-center space m-5">
        <BiArchive className="bold col-red-600 mr-5 mt-1" />
        Your Appointments
      </h1>
      <AddAppointment></AddAppointment>
      <Search></Search>
      <ul className="divide-y divide-gray-200">
      <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
            />
          ))
        }
      </ul>
      </ul>
    </div>
  );
}

export default App;
