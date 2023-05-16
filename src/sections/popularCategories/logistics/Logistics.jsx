import React from 'react'
import { Link } from 'react-router-dom'

function Logistics() {
    return (
        <>
            <nav className='navbar' style={{ boxShadow: '20px 20px 20px buttonface', marginBottom: '20px' }}>
            <Link className="fa fa-angle-left" aria-hidden="true" to='/'></Link>
            <div style={{marginRight: '50%'}}>Logistics</div>
            </nav>
        </>
    )
}

export default Logistics