import React from 'react'
import '../components/topbar.css'
import { NotificationsNone, Settings,Logout, AccountCircle } from '@mui/icons-material'

export default function Topbar(){
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className='logo'>
                        AdminDash
                    </span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <AccountCircle />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />                        
                    </div>
                    <div className="topbarIconContainer">
                        <Logout />                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}