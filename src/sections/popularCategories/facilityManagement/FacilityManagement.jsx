import React from 'react'
import { Link } from 'react-router-dom'

function FacilityManagement() {
    return (
        <>
            <nav className='navbar' style={{ boxShadow: '20px 20px 20px buttonface', marginBottom: '20px' }}>
                <Link className="fa fa-angle-left" aria-hidden="true" to='/'></Link>
                <div style={{ marginRight: '50%' }}>Facility Management</div>
            </nav>
            <table class="table table-hover m-0 p-0">
                <tbody>
                    <tr data-toggle="collapse" data-target="#accordion1" class="clickable">
                        <td>Maintainance services</td>
                    </tr>
                    <tr>
                        <table id="accordion1" class="table collapse">
                            <tbody>
                                <tr><td>Level1</td></tr>
                                <tr><td>Level2</td></tr>
                                <tr><td>Level3</td></tr>
                            </tbody>
                        </table>
                    </tr>
                    <tr data-toggle="collapse" data-target="#accordion2" class="clickable">
                        <td>Work wear & Uniforms</td>
                    </tr>
                    <tr>
                        <table id="accordion2" class="table collapse">
                            <tbody>
                                <tr><td>Level4</td></tr>
                                <tr><td>Level5</td></tr>
                            </tbody>
                        </table>
                    </tr>
                    <tr data-toggle="collapse" data-target="#accordion3" class="clickable">
                        <td>Custodial services</td>
                    </tr>
                    <tr>
                        <table id="accordion3" class="table collapse">
                            <tbody>
                                <tr><td>Level6</td></tr>
                            </tbody>
                        </table>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default FacilityManagement