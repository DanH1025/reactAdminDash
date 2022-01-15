import './widgetlarge.css'
import {Face} from '@mui/icons-material'

export default function Widgetlarge() {
    const Button = ({type}) =>{
        return <button className={"widgetlargeButton " + type}>{type}</button>
    };
    return (
        <div className='widgetlarge'>
            <h3 className="widgetlargeTitle">Report</h3>
            <table className="widgetlargeTable">
                <tr className="widgetlargeTr">
                    <th className="widgetlargeThCustomer">Customer</th>
                    <th className="widgetlargeThDate">Date</th>
                    <th className="widgetlargeThAmount">Amount</th>
                    <th className="widgetlargeThStatus">Status</th>
                </tr>                
                <tr className="widgetlargeTr">
                    <td className="widgetlargeUser">
                        <Face  className='widgetlargeImg'/>
                        <span className="widgetlargeName">Nati Abera</span>
                    </td>
                    <td className="widgetlargeDate">3 jul 2020</td>
                    <td className="widgetlargeAmount">$245</td>
                    <td className="widgetlargeStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetlargeTr">
                    <td className="widgetlargeUser">
                        <Face  className='widgetlargeImg'/>
                        <span className="widgetlargeName">Dave Robert</span>
                    </td>
                    <td className="widgetlargeDate">13 Feb 2021</td>
                    <td className="widgetlargeAmount">$2345</td>
                    <td className="widgetlargeStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetlargeTr">
                    <td className="widgetlargeUser">
                        <Face  className='widgetlargeImg'/>
                        <span className="widgetlargeName">Beti Alemu</span>
                    </td>
                    <td className="widgetlargeDate">23 Dec 2019</td>
                    <td className="widgetlargeAmount">$679</td>
                    <td className="widgetlargeStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetlargeTr">
                    <td className="widgetlargeUser">
                        <Face  className='widgetlargeImg'/>
                        <span className="widgetlargeName">Mekdes Abera</span>
                    </td>
                    <td className="widgetlargeDate">22 Aug 2021</td>
                    <td className="widgetlargeAmount">$456</td>
                    <td className="widgetlargeStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetlargeTr">
                    <td className="widgetlargeUser">
                        <Face  className='widgetlargeImg'/>
                        <span className="widgetlargeName">Elenore Maximo</span>
                    </td>
                    <td className="widgetlargeDate">19 Sep 2020</td>
                    <td className="widgetlargeAmount">$2453</td>
                    <td className="widgetlargeStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetlargeTr">
                    <td className="widgetlargeUser">
                        <Face  className='widgetlargeImg'/>
                        <span className="widgetlargeName">Frank Mattero</span>
                    </td>
                    <td className="widgetlargeDate">26 Nov 2021</td>
                    <td className="widgetlargeAmount">$242</td>
                    <td className="widgetlargeStatus"><Button type="Declined" /></td>
                </tr> 
            </table>
        </div>
    )
}
