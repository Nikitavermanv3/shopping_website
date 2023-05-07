import React from 'react'

function FeaturedEventsCard({ cardContent }) {
    let { title,
        time,
        name,
        place }
        = cardContent;
    return (
        // <div className={`card ${styles.feature_events_card}`} style={{ "width": "18rem" }}>
        <div className='card' style={{ minWidth: '300px' }}>
            <div>
                <button type='button' className='btn btn-primary' style={{ width: '60px', height: '36px', margin: '10px' }}  >New</button>
                <button type='button' className='btn btn-primary' style={{ width: '120px', height: '36px' }}>Scheduled</button>
            </div>
            <div style={{ marginLeft: '10px' }}>
                <div className='card-title' style={{ width: '70%', float: 'left' }}>
                    <b>{title}</b>
                </div>
                {/* <div style={{ height: '36px', width: '36px', float: 'right' }}>18</div> */}
                <span id="boot-icon" className="bi bi-calendar-date" style={{marginLeft: '20px', fontSize: '2rem'}}></span>
            </div>
            <div style={{ marginLeft: '10px' }}>{time}</div>
            <div style={{ margin: '10px' }}>
                <div style={{ height: '50px', width: '50px', borderRadius: '50%', float: 'left', backgroundColor: 'gray', marginRight: '10px' }} />
                <div>{name}</div>
                <div>{place}</div>
            </div>
            <div style={{ margin: '10px' }}>
                <div style={{ height: '20px', width: '20px', borderRadius: '50%', float: 'left', backgroundColor: '#1DE8B7', marginRight: '10px' }} />
                <div style={{color: '#1DE8B7'}}>one on one</div>
            </div>
        </div>
    )
}

export default FeaturedEventsCard