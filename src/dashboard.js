import NavBar from './Components/shared/navBar';
import './dashboard.css';
import JobsBoard from "./Components/jobsBoard";

function Dashboard() {
  return (
    <div className="App">
        <NavBar />
        <div className="container" >
            <JobsBoard />
        </div>
    </div>
  );
}

export default Dashboard;
