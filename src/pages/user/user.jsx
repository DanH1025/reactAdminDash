import './user.css'
import { AccountCircle, Publish } from '@mui/icons-material'

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        {/* <img src="" alt="" /> */}
                        <AccountCircle className='userShowTopImg'/>
                        <div className="userShowTopTitle">
                            <span className="userShowTopUsername">someOne</span>
                            <span className="usershowTopUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input className='userUpdateInput' 
                                type="text" placeholder='SomeOne' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Title</label>
                                <input className='userUpdateInput' 
                                type="text" placeholder='Software Engineer' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input className='userUpdateInput' 
                                type="email" placeholder='someone@gmail.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input className='userUpdateInput' 
                                type="text" placeholder='+251-9-12-53-23-21' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <AccountCircle/>
                                <label htmlFor="file"><Publish className='userUpdateUploadBtn' /></label>
                                <input type="file" id='file' style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
