import React, { useState } from 'react'
import ActionButtons from '../../sections/actionButtons/ActionButtons'
import HeroCarousal from '../../sections/heroCarousal/HeroCarousal'
import PopularCategories from '../../sections/popularCategories/PopularCategories'
import TrendingAuctions from '../../sections/trendingAuctions/TrendingAuctions'
import FeaturedProducts from '../../sections/featuredProducts/FeaturedProducts'
import FeaturedServices from '../../sections/featuredServices/FeaturedServices'
import FeaturedEvents from '../../sections/featuredEvents/FeaturedEvents'
import Footer from '../../sections/footer/Footer'

export default function LandingPage() {
    const [dropdownSel, setDropdownSel] = useState('Products')

    return (
        <>
            <nav className='navbar' style={{ boxShadow: '20px 20px 20px buttonface', marginBottom: '20px' }}>
                <i className="fa fa-bars" aria-hidden="true"></i>
                <form>
                    <div className="input-group ">
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span id="srch-category">{dropdownSel}</span> <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" id="mnu-category">
                                <li><a href="#Products" onClick={() => setDropdownSel('Products')}>Products</a></li>
                                <li><a href="#Services" onClick={() => setDropdownSel('Services')}>Services</a></li>
                            </ul>
                        </div>
                        <input type="hidden" id="txt-category" />
                        <input type="text" id="txt-search" className="form-control" placeholder="Search for..." />
                    </div>
                </form>
                <i className="fa fa-filter" aria-hidden="true" />
            </nav>
            <ActionButtons />
            <HeroCarousal />
            <PopularCategories />
            <TrendingAuctions />
            <FeaturedProducts />
            <FeaturedServices />
            <FeaturedEvents />
            <Footer/>
        </>
    )
}