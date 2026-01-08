import { Link } from "react-router-dom";
import Styles from "../../styles/dashboard_style.module.css";

const DashboardSidebar = () => {
    return (
        <>
            <div className={Styles.sidebar_wrapper}>
                <ul className={`list-group rounded-0`}>
                    <li className="list-group-item list-group-item-action">
                        <Link to={'/dashboard'} className="nav-link">
                            <b>Dashboard</b>
                        </Link>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Projects</b>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Pending Projects</b>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Dashboard</b>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Projects</b>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Pending Projects</b>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Dashboard</b>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Projects</b>
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <b>Pending Projects</b>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DashboardSidebar;