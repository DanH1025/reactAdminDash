import './chart.css'

// import for the graph only 
import {LineChart,Line,XAxis,CartesianGrid,Tooltip,ResponsiveContainer,Legend} from "recharts";

  


export default function Charts({title,data,dataKey,grid}) { 
    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data} >
                    <XAxis dataKey="month" stroke='green'/>
                    <Line type="monotone" dataKey={dataKey}  stroke='green'/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke='lightgray' strokeDasharray={5, 5}/>}
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
             
        </div>
    )
}
