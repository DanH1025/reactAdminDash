import './featuredInfo.css'
import {ArrowDownward , ArrowUpward} from '@mui/icons-material'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,330</span>
                    <span className="featuredMoneyRate">10.7<ArrowUpward className='featuredIcon positive'/></span>
                </div>
                <spn className="featuredSub">From last Month</spn>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$6,999</span>
                    <span className="featuredMoneyRate">3.5<ArrowUpward className='featuredIcon positive'/></span>
                </div>
                <spn className="featuredSub">From last Month</spn>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,224</span>
                    <span className="featuredMoneyRate">-7.3<ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <spn className="featuredSub">From last Month</spn>
            </div>
        </div>
    )
}
