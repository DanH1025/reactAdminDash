import './widgetsmall.css'
import {Visibility} from '@mui/icons-material'

export default function Widgetsmall() {
    return (
        <div className='widgetsmall'>
            <span className="widgetsmallTitle">New</span>
            <ul className="widgetsmallList">
                <li className="widgetsmallListItem">
                    <img className='widgetsmallImg' src="https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?b=1&k=20&m=1285124274&s=170667a&w=0&h=tdCWjbu8NxR_vhU3Tri7mZcfUH6WdcYWS1aurF4bbKI=" alt="" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUsername">Dano Hailu</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className='widgetsmallButton'>
                        <Visibility className='widgetsmallIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img className='widgetsmallImg' src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" alt="" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUsername">Hundaol Niguse</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className='widgetsmallButton'>
                        <Visibility className='widgetsmallIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img className='widgetsmallImg' src="https://media.istockphoto.com/photos/beautiful-young-woman-looking-up-picture-id1281998579?b=1&k=20&m=1281998579&s=170667a&w=0&h=8weMRk8eeY-ZIG68YH4r21Oy8ZkqA7tkY9qajeNZcoU=" alt="" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUsername">Blen Mesfen</span>
                        <span className="widgetsmallUserTitle">Data Analyst</span>
                    </div>
                    <button className='widgetsmallButton'>
                        <Visibility className='widgetsmallIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img className='widgetsmallImg' src="https://media.istockphoto.com/photos/african-american-woman-day-dreaming-in-public-park-on-beautiful-day-picture-id1289286426?b=1&k=20&m=1289286426&s=170667a&w=0&h=4e53OLksvcme-rwNZA0V57nFV4LG9343xZs6tY4xuLg=" alt="" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUsername">Hermela Ayele</span>
                        <span className="widgetsmallUserTitle">Sales Team</span>
                    </div>
                    <button className='widgetsmallButton'>
                        <Visibility className='widgetsmallIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img className='widgetsmallImg' src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUsername">Girum Tilahun</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className='widgetsmallButton'>
                        <Visibility className='widgetsmallIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
