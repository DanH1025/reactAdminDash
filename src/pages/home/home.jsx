import FeaturedInfo from "../../components/featuredInfo/featuredInfo"
import Chart from "../../components/chart/chart"
import "./home.css"
//importing dummy data
import {data} from '../../dummyData'

import Widgetsmall from "../../components/widgetsmall/widgetsmall"
import Widgetlarge from "../../components/widgetlarge/widgetlarge"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} title="General Report" grid dataKey="rate" />
            <div className="homeWidgets">
                <Widgetsmall/>
                <Widgetlarge/>
            </div>       

        </div>
    )
}
