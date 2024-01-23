import { MdDashboard, MdPayments, MdAutoGraph, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaUsers, FaUserClock } from "react-icons/fa";
import { FaSync, FaTasks } from "react-icons/fa";

const SideBarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
    },
    {
        title: "Employees",
        path: "/employees",
        icon: <FaUsers />
    },
    {
        title: "Core HR",
        path: "#",
        icon: <FaSync />,
        iconClosed: <MdKeyboardArrowDown />,
        iconOpened: <MdKeyboardArrowUp />,
        subNav: [
            {
                title: "Department",
                path: "/corehr/departments-list"
            },
            {
                title: "Designation",
                path: "/corehr/designation-list"
            },
            {
                title: "Policies",
                path: "/corehr/policies-list"
            },
            {
                title: "Make Announcement",
                path: "/corehr/news-list"
            },
            {
                title: "Organization Chart",
                path: "/corehr/chart"
            },
        ]
    },
    {
        title: "Attendance",
        path: "#",
        icon: <FaUserClock />,
        iconClosed: <MdKeyboardArrowDown />,
        iconOpened: <MdKeyboardArrowUp />,
        subNav: [
            {
                title: "Attendance",
                path: "/attendances/attendance-list"
            },
            {
                title: "Manual Attendance",
                path: "/attendances/manual-attendance"
            },
            {
                title: "Monthly Report",
                path: "/attendances/monthly-report"
            },
            {
                title: "Overtime Request",
                path: "/attendances/overtime-request"
            },
        ]
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
];

export default SideBarData;
