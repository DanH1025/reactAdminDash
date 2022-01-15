import './tables.css'
import { DataGrid } from '@material-ui/data-grid';
import {Delete} from '@mui/icons-material'
import {UserRows} from '../../dummyData'
import {Link} from 'react-router-dom'
import { useState } from 'react';



export default function Tables() {
    // using react hook to manipulate the user data inside the table 
    const [data,setData] = useState(UserRows)

    // check every item in the data file and check for id selected , if not correct jump, if correct filter out    
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
    }
    
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',      
      width: 160,  
      renderCell: (params)=>{
          return(
              <div>
                  <Link to={'/user/'+ params.row.id}>
                    <button className='userListEdit'>Edit</button>
                  </Link>                 
                 <Delete className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
              </div>
          )
      }  
    },
  ]; 
 
    return (
        <div className='tableView'>
             <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection
              disableSelectionOnClick />
        </div>
    )
}
