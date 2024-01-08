import { MdDashboard, MdPayments, MdAutoGraph } from "react-icons/md";
import { FaPeopleGroup, FaUserClock } from "react-icons/fa6";
import { FaSync, FaTasks } from "react-icons/fa";

const SideBarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: < MdDashboard />
    },
    {
        title: "Employees",
        path: "/employees",
        icon: < FaPeopleGroup />
    },
    {
        title: "CoreHR",
        path: "/corehr",
        icon: < FaSync />
    },
    {
        title: "Attendances",
        path: "/attendances",
        icon: < FaUserClock />
    },
    {
        title: "Payroll",
        path: "/payroll",
        icon: < MdPayments />
    },
    {
        title: "Tasks",
        path: "/tasks",
        icon: < FaTasks />
    },
    {
        title: "Performances",
        path: "/performances",
        icon: < MdAutoGraph />
    },
]

export default SideBarData