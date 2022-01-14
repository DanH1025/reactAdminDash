import "./sidebar.css"
import {Home, Groups , Insights,Assessment, TableChart , StackedBarChart, PieChart} from "@mui/icons-material"

export default function Sidebar(){
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">General</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                           <Home className="sidebarIcon" />
                           Home
                       </li>                       
                       <li className="sidebarListItem">
                           <Assessment className="sidebarIcon" />
                           Report
                       </li>                       
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Data View</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem ">
                           <TableChart className="sidebarIcon" />
                           Tables
                       </li>
                       <li className="sidebarListItem">
                           <StackedBarChart className="sidebarIcon" />
                           BarChart
                       </li>
                       <li className="sidebarListItem">
                           <PieChart className="sidebarIcon" />
                           Pie Chart
                       </li>                     
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Recent</h3>
                   <ul className="sidebarList">
                       
                   </ul>
               </div>
           </div>
        </div>
    )
}