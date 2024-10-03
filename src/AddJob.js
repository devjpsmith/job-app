import NavBar from "./Components/shared/navBar";
import AddJobForm from "./Components/addJobForm";

export default function AddJob(job) {
    return (
        <>
            <NavBar />
            <div className="container">
                <AddJobForm />
            </div>
        </>
    );
}