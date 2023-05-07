import React from 'react';
import styles from './styles.module.css';

function ActionButtons() {
    const actionButtonsArr = [
        {
            name: "Request Anything"
        },
        {
            name: "Create Event"
        },
        {
            name: "Auction Items"
        }
    ];

    return (
        <div className={styles.action_buttons_section}>
            {actionButtonsArr.map(({ name }, idx) => <div className={styles.action_button} key={`action_button_${idx}`}>
                {name}
            </div>)}
        </div>
    )
}

export default ActionButtons