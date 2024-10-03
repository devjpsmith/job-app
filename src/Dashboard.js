import NavBar from './Components/shared/navBar';
import './Dashboard.css';
import JobsBoard from "./Components/jobsBoard";

function Dashboard() {
  return (
    <div className="App">
        <NavBar />
        <div className="container">
            <JobsBoard />
        </div>
    </div>
  );
}

export default Dashboard;
