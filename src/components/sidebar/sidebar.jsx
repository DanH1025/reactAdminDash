import "./sidebar.css"
import {Home,Assessment, TableChart , StackedBarChart, PieChart} from "@mui/icons-material"

import {Link } from 'react-router-dom'


export default function Sidebar(){
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">General</h3>
                   <ul className="sidebarList">
                       <Link to={'/'} className="sidebarListLink">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon" />
                             Home
                        </li>
                       </Link>
                                              
                       <li className="sidebarListItem">
                           <Assessment className="sidebarIcon" />
                           Report
                       </li>                       
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Data View</h3>
                   <ul className="sidebarList">
                       <Link to={'/tables'} className="sidebarListLink" >
                        <li className="sidebarListItem">
                            <TableChart className="sidebarIcon" />
                            Tables
                        </li>
                       </Link>
                       
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