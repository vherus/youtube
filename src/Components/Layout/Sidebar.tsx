import { FC } from 'react'
import './Styles/Sidebar.css'

const Sidebar : FC = () => {
    return (
        <aside>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

                <hr />

                <li>History</li>
                <li>Watch later</li>

                <hr />

                <h3>Subscriptions</h3>
                <li>One</li>
                <li>Two</li>
            </ul>
        </aside>
    )
}

export default Sidebar
