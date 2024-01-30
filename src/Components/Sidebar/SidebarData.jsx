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
        path: "#",
        icon: <FaUsers />,
        iconClosed: <MdKeyboardArrowDown />,
        iconOpened: <MdKeyboardArrowUp />,
        subNav: [
            {
                title: "Employees",
                path: "/employees/staff-list"
            },
            {
                title: "Roles & Privileges",
                path: "/employees/roles-privileges"
            },
            {
                title: "Shift Scheduling",
                path: "/employees/shift-scheduling"
            },
            {
                title: "Employees Exit",
                path: "/employees/employees-exit"
            },
        ]
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
        path: "#",
        icon: < MdPayments />,
        iconClosed: <MdKeyboardArrowDown />,
        iconOpened: <MdKeyboardArrowUp />,
        subNav: [
            {
                title: "Payroll",
                path: "/payroll/payroll-list"
            },
            {
                title: "Pasyslip History",
                path: "/payroll/payslip-history"
            },
            {
                title: "Advance Salary",
                path: "/payroll/advance-salary"
            },
            {
                title: "Request Loan",
                path: "/payroll/request-loan"
            },
        ]
    },
    {
        title: "Tasks",
        path: "#",
        icon: < FaTasks />,
        iconClosed: <MdKeyboardArrowDown />,
        iconOpened: <MdKeyboardArrowUp />,
        subNav: [
            {
                title: "Tasks",
                path: "/tasks/tasks-list"
            },
            {
                title:"Projects",
                path:"/tasks/project"
            },
            {
                title:"Calendar",
                path:"/tasks/calendar"
            }
        ]
    },
    {
        title: "Performances",
        path: "/performances",
        icon: < MdAutoGraph />
    },
];

export default SideBarData;
