import Dashboard from "../components/dashboard/Dashboard";
import DashboardSidebar from "../components/sidebar/Dashboard-sidebar";

const DashboardPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row p-0">
                    <div className="col-lg-2 p-0">
                        <div className={`card bg-light rounded-0 border-0 `}>
                            <DashboardSidebar />
                        </div>
                    </div>
                    <div className="col-lg-10 bg-light">
                        <Dashboard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;