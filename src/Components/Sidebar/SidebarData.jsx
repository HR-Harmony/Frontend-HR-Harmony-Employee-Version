import { MdDashboard, MdPayments, MdKeyboardArrowDown, MdKeyboardArrowUp, MdEmojiPeople } from "react-icons/md";
import { FaUsers, FaUserClock, FaSync, FaTasks } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FiHelpCircle } from "react-icons/fi";

const SideBarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
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
                path:"/tasks/project-list"
            }
        ]
    },
    
    {
        title: "Helpdesk",
        path: "/helpdesk",
        icon: < FiHelpCircle />
    },
    
];

export default SideBarData;
